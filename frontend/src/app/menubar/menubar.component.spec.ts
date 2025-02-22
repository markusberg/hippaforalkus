import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MenubarComponent } from './menubar.component'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

describe('MenubarComponent', () => {
  let component: MenubarComponent
  let fixture: ComponentFixture<MenubarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter([]),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(MenubarComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
