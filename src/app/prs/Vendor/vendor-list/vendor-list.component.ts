import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService2 } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {
  vendors: Vendor[] = []; // the data that comes back from list.subscribe its saved to users

  constructor(
    private vendorsvc: VendorService2 
  ) {}

  ngOnInit(): void {
    this.vendorsvc.list().subscribe({  //makes a call to the userService method called list() 
                                     //then subscribes is like await but it takes to inputs next and error
                                     //next is what happens when it works sucessfully
                                     //error is when something goes wrong

      next: (res) => { //res is response will contain everything the method returns
        console.table(res); //what shows in dev tools
        this.vendors= res as Vendor[];
      },
      error: (err) => {console.error(err)} //if we dont get a 200 like response this happens
    })
    
  }
}
