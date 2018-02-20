import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLogDialogComponent } from './work-log-dialog.component';

describe('WorkLogDialogComponent', () => {
  let component: WorkLogDialogComponent;
  let fixture: ComponentFixture<WorkLogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
