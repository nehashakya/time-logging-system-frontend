export class WorkLog{
	id: number;
	titleOfWork : String;
    descriptionOfWork : String;
    noOfHours : Number;
    date: String;
    user : string;
    firstName : String;
    lastName : String;

    constructor( date: String, titleOfWork: string, descriptionOfWork: string, noOfHours: Number){
    	this.date = date;
    	this.titleOfWork = titleOfWork;
    	this.descriptionOfWork = descriptionOfWork;
    	this.noOfHours = noOfHours;   	
    }
}