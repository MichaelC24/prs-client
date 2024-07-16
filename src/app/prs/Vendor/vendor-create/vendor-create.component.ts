import { Component } from '@angular/core';
import { VendorService2 } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.css'
})
export class VendorCreateComponent {
  vendor: Vendor = new Vendor();
  isReadonly: boolean = false;
  isHidden: boolean = false;

  constructor(
    private vndrsvc: VendorService2, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a user it would take them back to the user list
  ) {}
  save(): void {
    this.vndrsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log("User Changed");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    
  }
}
