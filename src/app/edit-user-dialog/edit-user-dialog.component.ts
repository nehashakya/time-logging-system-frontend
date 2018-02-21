import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl  } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  form: FormGroup;
  currentUser: User;

  constructor(private formBuilder: FormBuilder,
  	private editUserDialogRef: MatDialogRef<EditUserDialogComponent>,
    private userService: UserService) {}

  ngOnInit() {
	this.userService.getCurrentUser()
  		.subscribe(user => this.currentUser = user);

  	let firstname = this.currentUser.firstname;
  	let lastname = this.currentUser.lastname;
  	let username = this.currentUser.username;
  	let email = this.currentUser.email;
  	let contactinfo = this.currentUser.contactinfo;
  	let department = this.currentUser.department;
  	let designation = this.currentUser.designation;
  	this.form = this.formBuilder.group({
  		firstname: new FormControl(firstname),
      	lastname: new FormControl(lastname),
      	username: new FormControl(username),
      	email: new FormControl(email),
      	contactinfo: new FormControl(contactinfo),
      	department: new FormControl(department),
      	designation: new FormControl(designation) 
  	})
  }

  submit(form){
    let user = new User(this.form.get('firstname').value, 
                          this.form.get('lastname').value, 
                          this.form.get('username').value,
                          this.form.get('password').value,
                          this.form.get('email').value,
                          this.form.get('contactinfo').value,
                          this.form.get('department').value,
                          this.form.get('designation').value);
    console.log("Received: "+ user.firstname);
    this.userService.editUser(user).subscribe();
    this.editUserDialogRef.close(user);
  }

  cancel(){
    this.editUserDialogRef.close();
  }



}
