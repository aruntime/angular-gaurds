import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private router: Router) { }

  login() {
    //Actually we would like to send a post request to the server.
    //This is temp
    if(this.model.username ==="karan"  && this.model.password === "karan" ) {
      localStorage.setItem('user', this.model.username);
      localStorage.setItem('password', this.model.password);
      //redirect to the task manager
      this.router.navigate(['/profile']);
    } else {
      //show an error
      alert('Error occured');
    }
  }
  


  ngOnInit() {
    localStorage.removeItem('user');
  }

}
