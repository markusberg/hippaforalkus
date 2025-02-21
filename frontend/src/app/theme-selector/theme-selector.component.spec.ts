import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ThemeSelectorComponent } from './theme-selector.component'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent
  let fixture: ComponentFixture<ThemeSelectorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents()

    fixture = TestBed.createComponent(ThemeSelectorComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
