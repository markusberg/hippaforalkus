import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core'
import { ThemeKey, ThemeStore } from '../store/theme.store'
import { NgClass } from '@angular/common'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

export type BSTheme = {
  id: ThemeKey
  title: string
  icon: string
}

@Component({
  selector: 'app-theme-selector',
  imports: [NgbDropdownModule, NgClass],
  template: `
    <div ngbDropdown class="d-inline-block">
      <button
        type="button"
        class="btn nav-link"
        ngbDropdownToggle
        role="button"
        aria-label="Select theme"
      >
        <i class="bi" [ngClass]="currentTheme().icon"></i>
      </button>
      <div
        ngbDropdownMenu
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="theme-dropdown"
      >
        @for (theme of themes; track theme.id) {
          <button
            ngbDropdownItem
            (click)="selectTheme(theme.id)"
            [class.active]="theme.id === currentTheme().id"
          >
            <i class="me-2 bi" [ngClass]="theme.icon"></i>{{ theme.title }}
          </button>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  readonly themeStore = inject(ThemeStore)

  readonly themes: BSTheme[] = [
    { id: 'auto', title: 'Auto', icon: 'bi-circle-half' },
    { id: 'light', title: 'Light', icon: 'bi-brightness-high-fill' },
    { id: 'dark', title: 'Dark', icon: 'bi-moon-stars-fill' },
  ]

  currentTheme = computed(() => {
    const theme = this.themes.find((theme) => theme.id === this.themeStore.id())
    return theme || this.themes[0]
  })

  selectTheme(id: ThemeKey): void {
    this.themeStore.persist(id)
  }
}
