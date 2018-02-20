import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { WorkLog } from '../work-log';
import { WorkLogService } from '../work-log.service';

@Component({
  selector: 'app-work-log-dialog',
  templateUrl: './work-log-dialog.component.html',
  styleUrls: ['./work-log-dialog.component.css']
})
export class WorkLogDialogComponent implements OnInit {form: FormGroup;

  constructor(private formBuilder: FormBuilder,
  	private workLogDialogRef: MatDialogRef<WorkLogDialogComponent>,
    private workLogService: WorkLogService) { }

  ngOnInit() {
  	this.form = this.formBuilder.group({
    		date: '',
    		titleOfWork: '',
      	descriptionOfWork: '',
      	noOfHours: '' 
  	})
  }

  submit(form){
    let workLog = new WorkLog(this.form.get('date').value, 
                          this.form.get('titleOfWork').value, 
                          this.form.get('descriptionOfWork').value,
                          this.form.get('noOfHours').value);
    this.workLogService.addWorkLog(workLog).subscribe();
    this.workLogDialogRef.close(workLog);
  }

  cancel(){
    this.workLogDialogRef.close();
  }

}
