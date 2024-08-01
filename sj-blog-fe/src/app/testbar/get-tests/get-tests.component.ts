import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-tests',
  standalone: true,
  imports: [],
  templateUrl: './get-tests.component.html',
  styleUrl: './get-tests.component.css'
})
export class GetTestsComponent {
  @Output() getHello = new EventEmitter();
  @Output() getCsrf = new EventEmitter();

  getHelloRequest() {
    this.getHello.emit();
  }

  getCsrfRequest() {
    this.getCsrf.emit();
  }
}
