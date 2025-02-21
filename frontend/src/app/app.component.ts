import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MenubarComponent } from './menubar/menubar.component'

@Component({
  selector: 'app-root',
  imports: [MenubarComponent, RouterOutlet],
  template: `<app-menubar /><router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'frontend'
}
