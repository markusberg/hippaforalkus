import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { PostPayload } from '../../../../backend/dist/interfaces/post'
import { PostsService } from '../posts.service'
import { firstValueFrom } from 'rxjs'

type Formify<T> = { [key in keyof T]: FormControl<T[key]> }
type FormPostPayload = Formify<PostPayload>

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
})
export class CreateComponent {
  private postsService = inject(PostsService)

  form = new FormGroup<FormPostPayload>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    content: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    state: new FormControl('draft', {
      nonNullable: true,
    }),
  })

  async onSubmit() {
    if (this.form.invalid) {
      return
    }
    try {
      const post = this.form.getRawValue()
      await firstValueFrom(this.postsService.create(post))
      this.form.markAsPristine()
    } catch (error) {
      console.error(error)
    }
  }

  reset() {
    this.form.reset()
  }
}
