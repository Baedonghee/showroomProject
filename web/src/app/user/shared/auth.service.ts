import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';


import { User } from "./user.interface";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserAuthService {

	constructor (private http: Http, private router: Router) {}
	public subject: Subject<boolean> = new BehaviorSubject<boolean>(false);
	//private signinUrl = 'http://192.168.1.225:3000/shop/login'
	//private userUrl = 'http://192.168.1.225:3000/shop';
	//subject: Subject<boolean>;

	private userUrl = 'https://appserver.goallshow.com/shop/login'

	signinUser (body: Object): Observable<any> {
		let bodyString = JSON.stringify(body);
		let headers = new Headers({ 'Content-Type': 'application/json' });

		let options = new RequestOptions({ headers: headers});

		return this.http.post(this.userUrl, bodyString, options)
						 .map((res: Response) => {
						 	localStorage.setItem('shopToken',res.headers.get("shopToken"));
						 	return res.json();
						 })
						 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	getinUser(): Observable<any> {
		return this.http.get(this.userUrl)
						.map((res:Response) => res.json())
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	isAuthenticated(): Observable<boolean> {	
		//let subject = new Subject<boolean>();
		if(localStorage.getItem("shopName")!=null){
			this.subject.next(true);
		} else {
			this.subject.next(false);
		}
		
		return this.subject.asObservable();
	}

	logout() {
		localStorage.clear();
		this.router.navigate(['']);
	}


}