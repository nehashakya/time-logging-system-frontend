export class User{
	id: string;
	username: String;
	firstname: String;
	lastname: String;
	password: String;
	email : String;
    contactinfo : String;
    designation : String;
    department: String;

	constructor(firstname: string, lastname: string, username: string, password: string, email : string,
    				contactinfo : string, department : string, designation: string){
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.contactinfo = contactinfo;
		this.department = department;
		this.designation = designation;
	}
}