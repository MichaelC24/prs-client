import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
password: string = "";
username: string ="";
message: string = "";

constructor(
  
  private usrsvc: UserService, //lets us talk to c#
  private router: Router // lets us navigate to different components 
                         // basically if someone were to delete a user it would take them back to the user list
) {}
login(): void {
  this.message = "";
  this.usrsvc.login(this.username, this.password).subscribe({
    next: (res) => {
      console.log("Login Successful!")
      
      this.router.navigateByUrl("/user/list");
    },
    error: (err) => {
      if(err.status == 404) //checks to see if the error is actually just a not found error
      {
        
        this.message = "NOT FOUND";
        return;
      }
      console.error(err)
    }
  })
}
ngOnInit(): void {}
}
