import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
	form: FormGroup;

  constructor(private formBuilder: FormBuilder,
  	private addUserDialogRef: MatDialogRef<AddUserDialogComponent>,
    private userService: UserService) { }

  ngOnInit() {
  	this.form = this.formBuilder.group({
  		firstname: '',
      lastname: '',
      username: '',
      password: '',
      email:'',
      contactinfo:'',
      department:'',
      designation:'' 
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
    this.userService.addUser(user).subscribe();
    this.addUserDialogRef.close(user);
  }

  cancel(){
    this.addUserDialogRef.close();
  }

}
