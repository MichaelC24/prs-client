import { Component } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrl: './request-change.component.css'
})
export class RequestChangeComponent {
  request: Request = new Request();
  isReadonly: boolean = false;
  isHidden: boolean = false;

  constructor(
    private reqsvc: RequestService, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a request it would take them back to the request list
  ) {}
  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.log("Request Changed");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInt(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log(res); 
        this.request = res as Request;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
