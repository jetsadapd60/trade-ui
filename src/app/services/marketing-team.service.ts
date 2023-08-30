import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { DataMarketingTeam, MarketingTeamResponeModel } from "../shared/models/marketing-team.model";
import { HttpService } from "./http.service";

@Injectable()
export class MarketingTeamService implements OnDestroy {

    private subscription!: Subscription;

    private readonly BASE_URL: string = environment.url_server_api;
    private readonly MARKETING_ENPOINT: string = 'api/trader-marketing-team';

    private marketingTeam = new BehaviorSubject<DataMarketingTeam[]>([]);

    marketingTeam$ = this.marketingTeam.asObservable();

    constructor(private httpService: HttpService) {

        this.getMarketingTeam();
        
    }

    private getMarketingTeam() {

        // Next
        const next = (res: MarketingTeamResponeModel) => {
            if(res && res.status) this.marketingTeam.next(res.result);
            console.log(res)
        };

        // Error
        const error = (error: any) => console.log('get marketing team error is: <>', error);

        this.subscription = this.httpService
            .get<MarketingTeamResponeModel>(`${this.BASE_URL}${this.MARKETING_ENPOINT}`)
            .subscribe({next, error})
    }

    ngOnDestroy(): void {
        this.subscription ? this.subscription.unsubscribe():null;
    }
}