import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { UserComponent }   from './user/user.component';
import { LoginComponent } from './login/login.component';
import { WorkLogComponent } from './work-log/work-log.component';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
	{	path: '', component: LoginComponent	},
	{	path: 'home', component: HomeComponent},
	{	path: 'home/users', component: UserComponent	},
	{	path: 'home/workLogs', component: WorkLogComponent },
	{	path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
