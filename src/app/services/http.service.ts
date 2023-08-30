import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { TokenServiec } from "./token.service";


@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(
                private _http: HttpClient, 
                private tokenServiec: TokenServiec) {}

    post<T>(url: string, data: any): Observable<T> {

        return this._http.post<T>(url, data, { headers: this.headers });

    }

    postLogin<T>(url: string, data: any): Observable<T> {

        return this._http.post<T>(url, data);

    }

    get<T>(url: string): Observable<T> {

        return this._http.get<T>(url, {headers: this.headers});

    }

    private get headers(): HttpHeaders {

        const header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.tokenServiec.getAccessToken()}`
        })

        return header;
    }
}