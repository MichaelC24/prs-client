import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  user: User = new User();
  isReadonly: boolean = false;
  isHidden: boolean = false;

  constructor(
    private usrsvc: UserService, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a user it would take them back to the user list
  ) {}
  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.log("User Changed");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    // let id = this.route.snapshot.params["id"]; //brings you the value that was pass to the url 
    
    // this.usrsvc.get(id).subscribe({
    //   next: (res) => { //takes whatever the line above returns and saves it to res (an instance of user)
    //     console.log(res); //returns whatever is in res to inspect element
    //     this.user = res as User; //takes res's value and saves it to user which is an instance of User
    //   },
    //   error: (err)=> {
    //     console.error(err);
    //   }
    // })
  }
}
