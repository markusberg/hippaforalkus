import { TestBed } from '@angular/core/testing'
import { provideHttpClientTesting } from '@angular/common/http/testing'

import { PostsService } from './posts.service'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideHttpClient } from '@angular/common/http'

describe('PostsService', () => {
  let service: PostsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
    service = TestBed.inject(PostsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
