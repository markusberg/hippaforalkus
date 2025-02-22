import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-menubar',
  imports: [
    NgbCollapse,
    NgbDropdownModule,
    RouterModule,
    ThemeSelectorComponent,
  ],
  templateUrl: './menubar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
