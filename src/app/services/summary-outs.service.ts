
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SummaryOutsService {

  private BASE_URL: string = environment.url_api;
  private SUMMARY_URL: string = 'summary';

  constructor(private httpService: HttpService) {}

  getSettle(from_date?: string,to_date?: string,from_time?: string,to_time?: string) {
    return this.httpService.get(
      `${this.BASE_URL}${this.SUMMARY_URL}/settles?${
        from_date ? `&from_date=${from_date}` : ''
      }${to_date ? `&to_date=${to_date}` : ''}${
        from_time ? `&from_time=${from_time}` : ''
      }${to_time ? `&to_time=${to_time}` : ''}`,
    ).pipe(catchError((e: HttpErrorResponse) => {throw e}));
  }

  getHedge(from_date?: string,to_date?: string,from_time?: string,to_time?: string) {
    return this.httpService.get(
      `${this.BASE_URL}${this.SUMMARY_URL}/hedges?${
        from_date ? `&from_date=${from_date}` : ''
      }${to_date ? `&to_date=${to_date}` : ''}${
        from_time ? `&from_time=${from_time}` : ''
      }${to_time ? `&to_time=${to_time}` : ''}`,
    ).pipe(catchError((e: HttpErrorResponse) => {throw e}));;
  }

  getTrade(from_date?: string,to_date?: string,from_time?: string,to_time?: string) {
    return this.httpService.get(
      `${this.BASE_URL}${this.SUMMARY_URL}/trades?${
        from_date ? `&from_date=${from_date}` : ''
      }${to_date ? `&to_date=${to_date}` : ''}${
        from_time ? `&from_time=${from_time}` : ''
      }${to_time ? `&to_time=${to_time}` : ''}`,
    ).pipe(catchError((e: HttpErrorResponse) => {throw e}));
  }
}
