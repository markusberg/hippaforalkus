import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Post } from '../../../backend/dist/interfaces/post'
import { WithStringId } from '../../../backend/dist/interfaces/mongodb'

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  url = '/api/posts'

  getAll(): Observable<WithStringId<Post>[]> {
    return this.httpClient.get<WithStringId<Post>[]>(this.url)
  }

  get(id: string): Observable<Post> {
    return this.httpClient.get<WithStringId<Post>>(`${this.url}/${id}`)
  }

  create(post: Post): Observable<void> {
    return this.httpClient.post<void>(this.url, post)
  }

  update(id: string, post: Post): Observable<void> {
    return this.httpClient.put<void>(`${this.url}/${id}`, post)
  }

  remove(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  }
}
