import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrl: './request-view.component.css'
})
export class RequestViewComponent {
  isReadonly = true;
  isHidden = true;
  request: Request =  new Request(); //need the new Request() because it then waits for us to pass in data
  verifyRemove: boolean = false;

  constructor(
    private usrsvc: RequestService, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a request it would take them back to the request list
  ) {}

  toggleVerifyRemove(): void{
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.usrsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.log("request del");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]; //brings you the value that was pass to the url 
    
    this.usrsvc.get(id).subscribe({
      next: (res) => { //takes whatever the line above returns and saves it to res (an instance of request)
        console.log(res); //returns whatever is in res to inspect element
        this.request = res as Request; //takes res's value and saves it to request which is an instance of Request
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}


