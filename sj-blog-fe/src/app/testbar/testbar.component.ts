import { Component } from '@angular/core';
import { GetTestsComponent } from "./get-tests/get-tests.component";
import { GetTestsService } from '../common/services/get-tests.service';
import { PostTestsComponent } from "./post-tests/post-tests.component";
import { PostTestsService } from '../common/services/post-tests.service';

@Component({
  selector: 'app-testbar',
  standalone: true,
  imports: [GetTestsComponent, PostTestsComponent],
  templateUrl: './testbar.component.html',
  styleUrl: './testbar.component.css'
})
export class TestbarComponent {
  constructor(
    private getTestService : GetTestsService,
    private postTestService : PostTestsService
  ) {}

  onGetHelloEvent() {
    this.getTestService.getHello().subscribe(res => {
      console.log("---GET /test/get_hello---");
      console.log(res);
    });
  }

  onGetCsrfEvent() {
    this.getTestService.getCsrf().subscribe(res => {
      console.log("---GET /test/get_csrf---");
      console.log(res);
    });
  }

  onGetUserEvent() {
    this.getTestService.getUser().subscribe(res => {
      console.log("---Get /test/get_user---");
      console.log(res);
    })
  }

  onPrivateGetHelloEvent() {
    this.getTestService.privateGetHello().subscribe(res => {
      console.log("---Private GET /api/private_get_hello");
      console.log(res);
    });
  }

  onGetIsAdminEvent() {
    this.getTestService.getIsAdmin().subscribe(res => {
      console.log("---Private GET /api/is_admin");
      console.log(res);
    })
  }

  onAdminGetHelloEvent() {
    this.getTestService.adminGetHello().subscribe(res => {
      console.log("---Private requires admin role GET /api/admin_get_hello");
      console.log(res);
    })
  }

  onRefreshTokenEvent() {
    this.getTestService.refreshToken().subscribe(res => {
      console.log("--Refresh Token sent check cookies /public/refresh-token");
      console.log(res);
    });
  }

  onPostHelloEvent() {
    this.postTestService.postHello().subscribe(res => {
      console.log("--Post /public/test/post_hello");
      console.log(res);
    })
  }
}
