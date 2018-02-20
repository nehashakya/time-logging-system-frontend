import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { WorkLog } from './work-log';

@Injectable()
export class WorkLogService {
	private allWorkLogsUrl = "http://localhost:3000/workLogs";
	private userSpecificWorkLogsUrl = "http://localhost:3000/users/" 
		+ JSON.parse(localStorage.getItem('currentUser')).userId + "/workLogs";

  constructor(private http : Http) { }

  getWorkLogs(): Observable<WorkLog[]>{
  	console.log("Service layer: Getting all work logs ...");
	return this.http.get(this.allWorkLogsUrl)
			.map((response: Response)=> response.json());
  }

  getWorkLogsById(): Observable<WorkLog[]>{
  	console.log("Service layer: Getting user specific work logs ...");

	return this.http.get(this.userSpecificWorkLogsUrl)
			.map((response: Response)=> response.json());
  }

  getWorkLogsByUsername(): Observable<WorkLog[]>{
  	console.log("Service layer: Getting user specific work logs ...");
  	let params: URLSearchParams = new URLSearchParams();
	params.set('username', JSON.parse(localStorage.getItem('currentUser')).username);
	let requestOptions = new RequestOptions();
	requestOptions.search = params;

	return this.http.get(this.userSpecificWorkLogsUrl, requestOptions)
			.map((response: Response)=> response.json());
  }

  addWorkLog(workLog: WorkLog): Observable<WorkLog>{
		console.log("Service layer: Adding worklog ...");
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		return this.http.post(this.userSpecificWorkLogsUrl, workLog, options)
			.map((response: Response)=> response.json());
	}

}
