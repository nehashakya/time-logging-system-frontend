import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {
	private loginUserUrl = 'http://localhost:3000/login';
	private baseUsersUrl = 'http://localhost:3000/users';

	token: string;
	
	constructor(private http: Http) { }

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

              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify({ username, token }));

              // return true to indicate successful login
              return true;
          } else {
              // return false to indicate failed login
              return false;
          }
        });
	}

	getUsers(): Observable<User[]> {
		console.log("Service layer: Getting users ...");
		return this.http.get(this.baseUsersUrl)
			.map((response: Response)=> response.json());
	}

	addUser(user: User): Observable<User>{
		console.log("Service layer: Adding user ...");
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		return this.http.post(this.baseUsersUrl, user, options)
			.map((response: Response)=> response.json());
	}

}
