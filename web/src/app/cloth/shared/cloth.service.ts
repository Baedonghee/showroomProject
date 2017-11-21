import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClothAuthService {

	constructor (private http: Http, private router: Router) {}
	public subject: Subject<boolean> = new BehaviorSubject<boolean>(false);
	//private signinUrl = 'http://192.168.1.225:3000/shop/login'
	//private userUrl = 'http://192.168.1.225:3000/shop';
	//subject: Subject<boolean>;

	private clothUrl = 'https://appserver.goallshow.com/shop/adminCloth/' 
	private getclothUrl = 'https://appserver.goallshow.com/shop/adminClothList/'
	private getdetailUrl = 'https://appserver.goallshow.com/shop/adminCloth/'
	
	

	addinCloth (body): Observable<any> {
		let bodyString = JSON.stringify(body);
		let headers = new Headers();
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		
		return this.http.post(this.clothUrl, body, options)
						 .map((res: Response) => {
						 	localStorage.setItem('shopToken',res.headers.get("shopToken"));
							return res.json();
						 })
						 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getinCloth(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions({ headers: headers});
		
		return this.http.get(this.getclothUrl,options)
						.map((res: Response) => {
							localStorage.setItem('shopToken',res.headers.get("shopToken"));
							console.log(res);
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}
	getinClothType(type): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions({ headers: headers});
		let getclothOuterUrl = this.getclothUrl+type;
		return this.http.get(getclothOuterUrl,options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinCloth(clothnumber): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions({ headers: headers});
		let deleteclothUrl = this.getdetailUrl+clothnumber;
		return this.http.delete(deleteclothUrl,options)
						.map(res => res.json())
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	editinCloth(body,clothnumber): Observable<any> {
		let bodyString = JSON.stringify(body);
		let headers = new Headers();
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions({ headers: headers});
		let editclothUrl = this.clothUrl+clothnumber;
		return this.http.put(editclothUrl,body,options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinClothDetail(clothnumber): Observable<any>{
		let getclothdetailUrl = this.clothUrl+clothnumber;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions({ headers: headers});
		return this.http.get(getclothdetailUrl,options)
						.map(files => files.json())
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}