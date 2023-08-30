import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { HttpService } from "./http.service";
import { ProfileRequrestModel } from "../shared/models/profile/profile-request.model";
import { BehaviorSubject } from "rxjs";
import { ProfileResponesModel } from "../shared/models/profile/profile-respones.model";

@Injectable()
export class ProfileService {

    private profile = new BehaviorSubject<ProfileResponesModel|undefined>(undefined);
    profile$ = this.profile.asObservable();

    private profileRequest: ProfileRequrestModel = {
        currentPage: 1,
        pageSize:1000,
        dateFrom: new Date(),
        dateTo: new Date(),
      }

    private readonly BASE_URL: string = `${environment.url_server_api}api/trader-profilelogs`;

    constructor(private httpService: HttpService) {
        this.fetchProfile(this.profileRequest);
    }

    fetchProfile(body: ProfileRequrestModel) {
        const next = (res: ProfileResponesModel) => {
            if(res && res.status) this.profile.next(res);
            if(res && !res.status) this.profile.next(undefined);
        }
        const error = (err: any) => {console.log('fetch profile error is: ', err)}

        
        this.httpService
            .post<ProfileResponesModel>(this.BASE_URL, body)
            .subscribe({next, error});
    }
}