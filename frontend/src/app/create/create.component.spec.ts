import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateComponent } from './create.component'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'

describe('CreateComponent', () => {
  let component: CreateComponent
  let fixture: ComponentFixture<CreateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(CreateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
