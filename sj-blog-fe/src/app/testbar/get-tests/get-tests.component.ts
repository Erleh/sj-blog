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
  @Output() getUser = new EventEmitter();
  @Output() privateGetHello = new EventEmitter();
  @Output() getIsAdmin = new EventEmitter();
  @Output() adminGetHello = new EventEmitter();
  @Output() refreshToken = new EventEmitter();

  getHelloRequest() {
    this.getHello.emit();
  }

  getCsrfRequest() {
    this.getCsrf.emit();
  }

  getUserRequest() {
    this.getUser.emit();
  }

  privateGetHelloRequest() {
    this.privateGetHello.emit();
  }

  isAdminRequest() {
    this.getIsAdmin.emit();
  }

  adminGetHelloRequest() {
    this.adminGetHello.emit();
  }

  refreshTokenRequest() {
    this.refreshToken.emit();
  }
}
