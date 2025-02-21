import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainComponent } from './main.component'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'

describe('MainComponent', () => {
  let component: MainComponent
  let fixture: ComponentFixture<MainComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(MainComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
