import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserGetComponent {

  isReadonly = true;
  isHidden = true;
  user: User =  new User(); //need the new User() because it then waits for us to pass in data
  verifyRemove: boolean = false;

  constructor(
    private usrsvc: UserService, //lets us talk to c#
    private route: ActivatedRoute, //lets you pass in a variable to the url
    private router: Router // lets us navigate to different components 
                          // basically if someone were to delete a user it would take them back to the user list
  ) {}

  toggleVerifyRemove(): void{
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.log("user del");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]; //brings you the value that was pass to the url 
    
    this.usrsvc.get(id).subscribe({
      next: (res) => { //takes whatever the line above returns and saves it to res (an instance of user)
        console.log(res); //returns whatever is in res to inspect element
        this.user = res as User; //takes res's value and saves it to user which is an instance of User
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}