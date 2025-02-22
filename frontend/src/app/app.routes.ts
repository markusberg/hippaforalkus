import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { CreateComponent } from './create/create.component'

export const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
]
