import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = []; // the data that comes back from list.subscribe its saved to users

  constructor(
    private usersvc: UserService 
  ) {}

  ngOnInit(): void {
    this.usersvc.list().subscribe({  //makes a call to the userService method called list() 
                                     //then subscribes is like await but it takes to inputs next and error
                                     //next is what happens when it works sucessfully
                                     //error is when something goes wrong

      next: (res) => { //res is response will contain everything the method returns
        console.table(res); //what shows in dev tools
        this.users= res as User[];
      },
      error: (err) => {console.error(err)} //if we dont get a 200 like response this happens
    })
    
  }

}
