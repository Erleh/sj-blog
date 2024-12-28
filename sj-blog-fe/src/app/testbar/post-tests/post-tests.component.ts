import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-tests',
  standalone: true,
  imports: [],
  templateUrl: './post-tests.component.html',
  styleUrl: './post-tests.component.css'
})
export class PostTestsComponent {
  @Output() postHello = new EventEmitter();

  postHelloRequest() {
    this.postHello.emit();
  }
}
