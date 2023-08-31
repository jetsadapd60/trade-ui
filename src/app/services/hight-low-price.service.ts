import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpService } from "./http.service";
import { HLPriceResponesModel } from "../shared/models/h-l-price/h-l-price.model";

@Injectable()
export class HightLowPriceService {

    private readonly BASE_URL: string = environment.url_server_api;
    private HL_PRICE_URL: string = "api/stock-highlow";

    private hightLowPirce = new BehaviorSubject<HLPriceResponesModel|undefined>(undefined);
    
    hightLowPirce$ = this.hightLowPirce.asObservable();

    constructor(private httpService: HttpService) {

        this.getHLPriceAll();

    }

    private getHLPriceAll() {
        const stream = this.httpService.get<HLPriceResponesModel[]>(`${this.BASE_URL}${this.HL_PRICE_URL}`);

        const next = (res: HLPriceResponesModel[]) => {
            if(res) this.hightLowPirce.next(res[0]);
        }

        stream.subscribe({next});
    }

}