import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  template: `
        <div class="row mt-3">
          <div class="col-12">
            <div class="card">
              <div class="card-body">

                  <form>
                    <div class="row">
                      <div class="col-12 col-xl-6 offset-xl-3">
                        <label class="h3 text-primary">Change Password</label>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                          <label for="floatingInput" class="text-primary">New Password</label>
                        </div>
                      </div>
                      <div class="col-12 col-xl-6 offset-xl-3">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                          <label for="floatingInput" class="text-primary">Confirm Password</label>
                        </div>
                      </div>
                    </div>


                  </form>


              </div>
            </div>
          </div>
        </div>
  `,
  styles: [
  ]
})
export class SettingComponent {

}
