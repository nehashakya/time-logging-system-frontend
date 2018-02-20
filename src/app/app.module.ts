import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user.service';
import { WorkLogService } from './work-log.service';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { LoginComponent } from './login/login.component';
import { WorkLogComponent } from './work-log/work-log.component';
import { WorkLogDialogComponent } from './work-log-dialog/work-log-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AddUserDialogComponent,
    LoginComponent,
    WorkLogComponent,
    WorkLogDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  	UserService,
    WorkLogService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddUserDialogComponent, WorkLogDialogComponent]
})
export class AppModule { }
