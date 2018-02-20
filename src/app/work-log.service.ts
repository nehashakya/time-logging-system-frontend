import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { WorkLog } from './work-log';

@Injectable()
export class WorkLogService {
	private allWorkLogsUrl = "http://localhost:3000/workLogs";
	private userSpecificWorkLogsUrl = "http://localhost:3000/users/:id/workLogs";

  constructor(private http : Http) { }

  getWorkLogs(): Observable<WorkLog[]>{
  	console.log("Service layer: Getting all work logs ...");
	return this.http.get(this.allWorkLogsUrl)
			.map((response: Response)=> response.json());
  }

  getWorkLogsById(id: string): Observable<WorkLog[]>{
  	console.log("Service layer: Getting user specific work logs ...");
  	let params: URLSearchParams = new URLSearchParams();
	params.set('id', id);
	let requestOptions = new RequestOptions();
	requestOptions.search = params;

	return this.http.get(this.userSpecificWorkLogsUrl, requestOptions)
			.map((response: Response)=> response.json());
  }

}
