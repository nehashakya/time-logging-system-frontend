import { User } from './user';

export class WorkLog{
	id: number;
	titleOfWork : String;
    descriptionOfWork : String;
    noOfHours : Number;
    date: String;
    user : User;
    firstName : String;
    lastName : String;

    constructor( date: String, titleOfWork: string, descriptionOfWork: string, noOfHours: Number){
    	this.date = date;
    	this.titleOfWork = titleOfWork;
    	this.descriptionOfWork = descriptionOfWork;
    	this.noOfHours = noOfHours;   	
    }
}