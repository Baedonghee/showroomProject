import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CodyAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private codyUrl = 'https://appserver.goallshow.com/shop/adminCody/';
	private clothUrl = 'https://appserver.goallshow.com/shop/adminCloth/';
	private codyAddUrl = 'https://appserver.goallshow.com/adminCody/';
	private codyDetailUrl = 'https://appserver.goallshow.com/adminCody/';
	private codyDeleteUrl = 'https://appserver.goallshow.com/adminCody/';

	getinCody(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.get(this.codyUrl, options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinCloth(): Observable<any> {
		const clothAllUrl = this.clothUrl;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.get(clothAllUrl,options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinCody(body): Observable<any> {
		let headers = new Headers();
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.post(this.codyUrl,body,options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinDetailCody(num): Observable<any>{
		const clothDetail = this.codyUrl+num;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.get(clothDetail, options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	editinCody(body, num): Observable<any> {
		const codyEditUrl = this.codyUrl+num;
		let headers = new Headers();
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.put(codyEditUrl,body,options)
						.map((res: Response) => {
							console.log(res);
							localStorage.setItem('shopToken',res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinCody(num): Observable<any> {
		const codyDeleteNumberUrl = this.codyUrl+num;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		headers.append('shopToken', localStorage.getItem("shopToken"));
		let options = new RequestOptions( {headers: headers});
		return this.http.delete(codyDeleteNumberUrl, options)
						.map((res: Response) => {
							localStorage.setItem('shopToken', res.headers.get("shopToken"));
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}