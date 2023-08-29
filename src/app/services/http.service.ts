import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { TokenServiec } from "./token.service";
import { StorageKey } from "../shared/enums/token.enum";

@Injectable({providedIn: 'root'})
export class HttpService {
    header: HttpHeaders = new HttpHeaders();
    constructor(private _http: HttpClient, private tokenServiec: TokenServiec) {}

    post<T>(url: string, data: any): Observable<T> {
        return this._http.post<T>(url, data);
    }

    get<T>(url: string): Observable<T> {
        const accessToken = this.tokenServiec.getAccessToken(StorageKey.ACCESS_TOKEN);
        if(accessToken) this.header.append('Authorization', `Bearer ${accessToken}`);
        return this._http.get<T>(url, {headers: this.header});
    }
}