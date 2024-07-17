import { Component } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { SystemService } from '../../../system.service';
@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrl: './request-create.component.css'
})
export class RequestCreateComponent {
  request: Request = new Request();
  isReadonly: boolean = false;
  isHidden: boolean = false;

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a request it would take them back to the request list
  ) {}
  create(): void {
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.log("Request Created");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    if(this.sys.loggedInUser == null){
      this.router.navigateByUrl("/user/login");
    }
    console.warn("Request.UserId is being auto loaded!")
    this.request.userId = this.sys.loggedInUser?.id ?? 1;
  }
}
