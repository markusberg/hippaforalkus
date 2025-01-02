import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MenubarComponent } from './menubar/menubar.component'

@Component({
  selector: 'app-root',
  imports: [MenubarComponent, RouterOutlet],
  template: ` <app-menubar />
    <router-outlet />`,
})
export class AppComponent {
  title = 'frontend'
}
