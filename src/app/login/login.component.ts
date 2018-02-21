import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: string;
	password: string;

	constructor(private userService: UserService,
		private router: Router) { }

	ngOnInit() {
  	}

	loginUser(){
		this.userService.loginUser(this.username, this.password).subscribe((result) => {
	      if (result) {
	        this.router.navigate(['home']);
	      } else {
	      	console.log("User login unsuccessful.");
	      }
	    });
	}

}
