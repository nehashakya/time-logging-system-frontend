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
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { LoginComponent } from './login/login.component';
import { WorkLogComponent } from './work-log/work-log.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AddUserDialogComponent,
    LoginComponent,
    WorkLogComponent
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
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddUserDialogComponent]
})
export class AppModule { }
