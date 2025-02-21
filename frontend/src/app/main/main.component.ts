import { AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-main',
  imports: [AsyncPipe],
  template: `
    <div class="container">
      <h1>Entries</h1>

      @if (posts$ | async; as posts) {
        @for (post of posts; track $index) {
          - {{ post }}
        } @empty {
          <p>No entries found</p>
        }
      } @else {
        <p>Loading...</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  readonly postsService = inject(PostsService)
  posts$ = this.postsService.getAll()
}
