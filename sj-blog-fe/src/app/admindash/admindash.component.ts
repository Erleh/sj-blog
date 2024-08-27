import { Component } from '@angular/core';
import { CreatePostFormComponent } from "./create-post-form/create-post-form.component";

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CreatePostFormComponent],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

}
