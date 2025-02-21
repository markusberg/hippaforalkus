import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Post } from '../../../backend/dist/interfaces/post'

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  url = '/api/posts'

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }

  get(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url}/${id}`)
  }
}
