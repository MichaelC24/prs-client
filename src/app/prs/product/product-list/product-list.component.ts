import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = []; // the data that comes back from list.subscribe its saved to users

  constructor(
    private prodsrvc: ProductService 
  ) {}

  ngOnInit(): void {
    this.prodsrvc.list().subscribe({  //makes a call to the userService method called list() 
                                     //then subscribes is like await but it takes to inputs next and error
                                     //next is what happens when it works sucessfully
                                     //error is when something goes wrong

      next: (res) => { //res is response will contain everything the method returns
        console.table(res); //what shows in dev tools
        this.products= res as Product[];
      },
      error: (err) => {console.error(err)} //if we dont get a 200 like response this happens
    })
    
  }
}
