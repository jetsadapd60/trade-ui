import { CSP_NONCE, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileRequrestModel } from 'src/app/shared/models/profile/profile-request.model';
import { DataProfile } from 'src/app/shared/models/profile/profile-respones.model';

type NewType = DataProfile[];

@Component({
  selector: 'app-profile',
  template: `
  <!-- <app-spinner></app-spinner> -->
  

    <div class="card mt-3">
      <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmitSearchForm()">
          <div class="row align-items-center">
            <!-- <div class="col-12 col-xl-2">
              <h3 class="text-primary small">Summary&Outstanding</h3>
            </div> -->
            <div class="col-md-4">
              <div class="form-group">
                <label for="example-date-input" class="form-control-label">From</label>
                <div class="d-flex gap-2">
                  <input class="form-control" type="date" formControlName="form" id="example-date-input">
                  <!-- <input class="form-control" type="time" value="10:30:00" id="example-time-input"> -->
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="example-date-input" class="form-control-label">To</label>
                <div class="d-flex gap-2">
                  <input class="form-control" type="date" formControlName="to" id="example-date-input">
                  <!-- <input class="form-control" type="time" value="10:30:00" id="example-time-input"> -->
                </div>
              </div>
            </div>
            <div class="col-md-4">
            <label for="example-date-input" class="form-control-label"></label>
              <button type="submit" class="btn btn-xl btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr class="bg-dark text-white">
                  <th class="text-start text-uppercase text-xs font-weight-bolder opacity-7">login date</th>
                  <th class="text-start text-uppercase text-xs font-weight-bolder opacity-7">ip address</th>
                  <th class="text-start text-uppercase text-xs font-weight-bolder opacity-7">username</th>
                  <th class="text-start text-uppercase text-xs font-weight-bolder opacity-7">role</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="haveProfile">
                    <td colspan="10" class="text-center py-3 h3 opacity-5">ไม่พบข้อมูล</td>
                </tr>
                <tr class="text-primary " *ngFor="let profile of profile$|async; trackBy:trackByFn">
                    <td class="text-start">{{profile.loginDate|date:"d/M/yy, h:mm"}}</td>
                    <td class="text-start">{{profile.ipAddress}}</td>
                    <td class="text-start">{{profile.username}}</td>
                    <td class="text-start">{{profile.roleName}}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [``]
})
export class ProfileComponent {

  profile$: Observable<DataProfile[]>;

  haveProfile!: boolean;

  form: FormGroup;

  dateNow: string = '2023-01-23';

  private profileRequest: ProfileRequrestModel = {
    currentPage: 1,
    pageSize   : 1000,
    dateFrom   : new Date(),
    dateTo     : new Date(),
  }

  constructor(private profileService: ProfileService, private fb:FormBuilder) {
    this.form = this.fb.group({
      form: [this.nowDate()],
      to  : [this.nowDate()]
    });

    this.profile$ = this.profileService
                        .profile$
                        .pipe(map(res=>{
                          console.log(res)
                          if(res && res.status && res.result) {
                            const { data, pagination: { total } } = res.result;
                            total > 0 ? this.haveProfile = false : this.haveProfile = true;
                            return data.map((res, index) => ({ ...res, id: index+1 }))
                          }
                          
                          this.haveProfile = true;
                          return [];
                        }));
  }

  getValueFrom(key: string) {
    return new Date(this.form.get(key)?.value);
  }


  onSubmitSearchForm() {
    this.profileRequest.dateFrom = this.getValueFrom('form');
    this.profileRequest.dateTo   = this.getValueFrom('to');
    this.profileService.fetchProfile(this.profileRequest);
  }

  trackByFn(index: number, item: any): string {
    return item.id; 
 }

  private nowDate() {
    let d = new Date();
    return `${d.getFullYear()}-${d.getMonth()<10?`0${d.getMonth()+1}`:`0${d.getDate()}`}-${d.getDate()}`;
  }
}
