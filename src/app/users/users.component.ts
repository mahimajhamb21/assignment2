import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   @Output() userAdded=new EventEmitter<{name:string,username:string,email:string}>();
 // @Input() users:User[]=[];

  constructor() {
   }

  ngOnInit(): void {
  }
  onAddUser(name:string,username:string,email:string){
    this.userAdded.emit({
        name,username,email
      });
  }

}
