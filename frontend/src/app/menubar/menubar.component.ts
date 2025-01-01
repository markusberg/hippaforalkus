import { Component, signal } from '@angular/core'
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component'

@Component({
  selector: 'app-menubar',
  imports: [NgbCollapse, NgbDropdownModule, ThemeSelectorComponent],
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {
  isCollapsed = signal<boolean>(true)

  collapse() {
    this.isCollapsed.set(true)
  }

  collapseToggle() {
    this.isCollapsed.update((val) => !val)
  }
}