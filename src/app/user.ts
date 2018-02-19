export class User{
	id: number;
	username: String;
	firstname: String;
	lastname: String;
	password: String;

	constructor(firstname: string, lastname: string, username: string, password: string){
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
	}
}