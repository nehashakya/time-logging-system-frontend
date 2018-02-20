import { Component, OnInit } from '@angular/core';

import { WorkLog } from '../work-log';
import { WorkLogService } from '../work-log.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-work-log',
  templateUrl: './work-log.component.html',
  styleUrls: ['./work-log.component.css']
})
export class WorkLogComponent implements OnInit {
	workLogs : WorkLog[];

	constructor(private workLogService: WorkLogService, private userService: UserService) { }

	ngOnInit() {
		this.getWorkLogs();
	}

	getWorkLogs(): void {
		this.workLogService.getWorkLogs()
			.subscribe(workLogs => this.workLogs = workLogs);
	}

}
