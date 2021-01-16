import { Component } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : User[]=[/*{name:'Mahima',username:'mahi721',email:'m@gmail.com'} */
];
ngOnInit(){
}
 onUserAdded(UserData:User){
   if(UserData.name.length>0 && UserData.username.length>0 && UserData.email.length>0)
   {
    this.users.push({
      name:UserData.name,
      username:UserData.username,
      email:UserData.email
   })
  }
  else{
    alert('Please enter all required fields');
  }
 }
 onDelete(index:number){
  this.users.splice(index,1);
 }
}
