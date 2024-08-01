import { Component } from '@angular/core';
import { GetTestsComponent } from "./get-tests/get-tests.component";
import { GetTestsService } from '../common/services/get-tests.service';

@Component({
  selector: 'app-testbar',
  standalone: true,
  imports: [GetTestsComponent],
  templateUrl: './testbar.component.html',
  styleUrl: './testbar.component.css'
})
export class TestbarComponent {
  constructor(
    private getTestService : GetTestsService
  ) {}

  onGetHelloEvent() {
    this.getTestService.getHello().subscribe(res => {
      console.log("---GET /get_hello---");
      console.log(res);
    });
  }

  onGetCsrfEvent() {
    this.getTestService.getCsrf().subscribe(res => {
      console.log("---GET /get_csrf---");
      console.log(res);
    });
  }
}
