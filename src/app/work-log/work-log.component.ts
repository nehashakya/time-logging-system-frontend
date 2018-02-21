import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';


import { WorkLog } from '../work-log';
import { WorkLogService } from '../work-log.service';
import { User } from '../user';
import { UserService } from '../user.service';

import { WorkLogDialogComponent } from '../work-log-dialog/work-log-dialog.component';


@Component({
  selector: 'app-work-log',
  templateUrl: './work-log.component.html',
  styleUrls: ['./work-log.component.css']
})
export class WorkLogComponent implements OnInit {
	workLogs : WorkLog[];
	userSpecificWorkLogs : WorkLog[];
	currentUser : User;
	addWorkLogDialogRef: MatDialogRef<WorkLogDialogComponent>;

	constructor(private workLogService: WorkLogService, 
		private userService: UserService,
		private addWorkLogDialog: MatDialog) { }

	ngOnInit() {
		this.userService.getCurrentUser().subscribe(u => this.currentUser = u);
		this.getWorkLogs();
		this.getUserSpecificWorkLogs();
	}

	getWorkLogs(): void {
		this.workLogService.getWorkLogs()
			.subscribe(workLogs => this.workLogs = workLogs);
	}

	getUserSpecificWorkLogs(): void{
		this.workLogService.getWorkLogsById()
					.subscribe(userSpecificWorkLogs => this.userSpecificWorkLogs = userSpecificWorkLogs);

	}

	openAddWorkLogDialog(){
      this.addWorkLogDialogRef = this.addWorkLogDialog
        .open(WorkLogDialogComponent, {
          hasBackdrop: false
        });

      this.addWorkLogDialogRef
        .afterClosed()
        .pipe(filter(userSpecificWorkLog => userSpecificWorkLog))
        .subscribe(userSpecificWorkLog => 
          this.userSpecificWorkLogs.push(userSpecificWorkLog));
    }
}
