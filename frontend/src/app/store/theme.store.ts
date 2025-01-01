import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals'

export type ThemeKey = 'auto' | 'light' | 'dark'
export type ThemeState = { id: ThemeKey }
export const LOCALSTORAGEKEY = 'bstheme'

const userpref = (localStorage.getItem(LOCALSTORAGEKEY) as ThemeKey) || null
const initialState = userpref || 'auto'

export const ThemeStore = signalStore(
  { providedIn: 'root' },
  withState<ThemeState>({ id: initialState }),
  withMethods((store) => ({
    // activate the current theme. "auto" will query the OS for theme selection
    activate(): void {
      const lightOrDark = store.id() === 'auto' ? getOSTheme() : store.id()
      document.documentElement.setAttribute('data-bs-theme', lightOrDark)
    },

    // save the theme to the current session, and activate it
    save(id: ThemeKey): void {
      patchState(store, { id })
      this.activate()
    },

    // persist the theme to local storage, save to session, and activate
    persist(id: ThemeKey): void {
      localStorage.setItem(LOCALSTORAGEKEY, id)
      this.save(id)
    },
  })),

  withHooks({
    onInit(store) {
      // start by activating the current setting
      store.activate()

      // configure OS dark theme change listener
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => store.activate())

      // listen to changes in localStorage
      // this happens if another app on this domain makes changes
      window.addEventListener('storage', ($event) => {
        if ($event.key === LOCALSTORAGEKEY) {
          const id: ThemeKey =
            $event.newValue === 'light'
              ? 'light'
              : $event.newValue === 'dark'
                ? 'dark'
                : 'auto'

          // important: don't persist, or there will be endless loops between
          // the two applications persisting the same value
          store.save(id)
        }
      })
    },
  }),
)

function getOSTheme(): 'light' | 'dark' {
  const mqlist = window.matchMedia('(prefers-color-scheme: dark)')
  return mqlist.matches ? 'dark' : 'light'
}
