import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService2 } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrl: './vendor-view.component.css'
})
export class VendorViewComponent {
  isReadonly = true;
  isHidden = true;
  vendor: Vendor =  new Vendor(); //need the new User() because it then waits for us to pass in data
  verifyRemove: boolean = false;

  constructor(
    private vdrsvc: VendorService2, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a user it would take them back to the user list
  ) {}

  toggleVerifyRemove(): void{
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.vdrsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.log("vendor del");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]; //brings you the value that was pass to the url 
    
    this.vdrsvc.get(id).subscribe({
      next: (res) => { //takes whatever the line above returns and saves it to res (an instance of user)
        console.log(res); //returns whatever is in res to inspect element
        this.vendor = res as Vendor; //takes res's value and saves it to user which is an instance of User
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}