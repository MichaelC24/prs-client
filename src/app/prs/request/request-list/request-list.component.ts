import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent {
  requests: Request[] = []; // the data that comes back from list.subscribe its saved to users

  constructor(
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.reqsvc.list().subscribe({  

      next: (res) => { 
        console.table(res); 
        this.requests= res as Request[];
      },
      error: (err) => {console.error(err)}
    })
    
  }
}
