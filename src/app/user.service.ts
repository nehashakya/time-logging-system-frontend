import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {
	private loginUserUrl = 'http://localhost:3000/login';
	private baseUsersUrl = 'http://localhost:3000/users';

	token: string;
	private loggedIn = false;
	user: User;
	
	constructor(private http: Http) {
		this.loggedIn = !!localStorage.getItem('currentUser');
	}

	loginUser(username:string, password:string): Observable<boolean>{
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("Service layer: Logging in ...");
		return this.http.post(this.loginUserUrl, JSON.stringify({username, password}), options)
			.map((response: Response) => {
          // login successful if there's a jwt token in the response
          const token = response.json() && response.json().token;
          if (token) {
              // set token property
              this.token = token;
              localStorage.removeItem('currentUser');
              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(response.json()));
              // return true to indicate successful login
              return true;
          } else {
              // return false to indicate failed login
              return false;
          }
        });
	}

	logout() {
		localStorage.removeItem('currentUser');
	    this.loggedIn = false;
	}

	isLoggedIn() {
		return this.loggedIn;
	}

	getUsers(): Observable<User[]> {
		console.log("Service layer: Getting users ...");
		return this.http.get(this.baseUsersUrl)
			.map((response: Response)=> response.json());
	}

	getCurrentUser(): Observable<User> {
		console.log("Service layer: Getting current user ...");
		var baseUserUrl = 'http://localhost:3000/users/' + JSON.parse(localStorage.getItem('currentUser')).userId;
		return this.http.get(baseUserUrl)
			.map((response: Response)=> {
				console.log(response.json());
				return response.json();
			});
	}

	// getUserByUsername(): Observable<User> {
	// 	console.log("Service layer: getUserByUsername ...");
	// 	let params: URLSearchParams = new URLSearchParams();
	// 	params.set('username', JSON.parse(localStorage.getItem('currentUser')).username);
	// 	console.log("params:"+ params);
	// 	let requestOptions = new RequestOptions();
	// 	requestOptions.search = params;
	// 	return this.http.get(this.baseUsersUrl, requestOptions)
	// 		.map((response: Response)=> {
	// 			console.log("-------------------"+response.json().username);
	// 			return response.json()});
	// }

	addUser(user: User): Observable<User>{
		console.log("Service layer: Adding user ...");
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		return this.http.post(this.baseUsersUrl, user, options)
			.map((response: Response)=> response.json());
	}

	editUser(user: User): Observable<User>{
		console.log("Service layer: Editing user ...");
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let editUserUrl = "http://localhost:3000/users/" + user.id;
		return this.http.put(editUserUrl, user, options)
			.map((response: Response)=> response.json());
	}

}
