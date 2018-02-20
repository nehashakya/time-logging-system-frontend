import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/users', title: 'Users Profile', class: 'users' },
    { path: '/workLogs', title: 'Work Log', class: 'workLogs' }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public menuItems: any[];
  selectedMenuItem: string;
  constructor() { }

	ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log("==" + this.selectedMenuItem);
	}

  onSelect(selectedMenuItem: string){
    this.selectedMenuItem = selectedMenuItem;
    console.log("====" + this.selectedMenuItem);
  }
}
