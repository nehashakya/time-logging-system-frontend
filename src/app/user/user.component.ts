import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';

import { filter } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';

import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: User[];
  user: User;
  addUserDialogRef: MatDialogRef<AddUserDialogComponent>;
  editUserDialogRef: MatDialogRef<EditUserDialogComponent>;

  	constructor(private userService: UserService, 
      private addUserDialog: MatDialog,
      private editUserDialog: MatDialog) {
    }

  	ngOnInit() {
  		this.getUser();
      this.getUsers();
  	}

  	getUsers(): void {
        this.userService.getUsers()
            .subscribe(users => this.users = users);
    }

    getUser(): void{
      this.userService.getCurrentUser()
        .subscribe(user => this.user = user);
    }

    openAddUserDialog(){
      this.addUserDialogRef = this.addUserDialog
        .open(AddUserDialogComponent, {
          hasBackdrop: false
        });

      this.addUserDialogRef.afterClosed()
        .pipe(filter(user => user))
        .subscribe(user => 
          this.users.push(user));
    }

    openEditUserDialog(){
      this.editUserDialogRef = this.editUserDialog
        .open(EditUserDialogComponent, {
            hasBackdrop: false
        });

      this.editUserDialogRef.afterClosed()
        .pipe(filter(user => user))
        .subscribe(user => this.user = user);  
    }

    
}
