import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MenubarComponent } from './menubar.component'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'

describe('MenubarComponent', () => {
  let component: MenubarComponent
  let fixture: ComponentFixture<MenubarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents()

    fixture = TestBed.createComponent(MenubarComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
