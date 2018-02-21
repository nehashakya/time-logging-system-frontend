import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

export interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/users', title: 'USER PROFILE', class: 'users' },
    { path: '/workLogs', title: 'WORK LOG', class: 'workLogs' },
    { path: '/logout', title: 'LOG OUT', class: 'logout' }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public menuItems: any[];
  selectedMenuItem: string;
  currentUser : User;
  constructor(private userService: UserService) { }

	ngOnInit() {
        this.userService.getCurrentUser().subscribe(u => this.currentUser = u);
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log("==" + this.selectedMenuItem);
	}

  onSelect(selectedMenuItem: string){
    this.selectedMenuItem = selectedMenuItem;
    console.log("====" + this.selectedMenuItem);
  }
}
