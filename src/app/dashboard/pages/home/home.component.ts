import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
        <div class="row mt-3">

                  <!-- ฝั่งซ้า -->
          <div class="col-lg-10 mb-lg-0 mb-4">

            <div class="row">
              <div class="col-lg-6">
                <div>
                  <div class="text-white d-flex justify-content-between">
                    <p class="m-0">Summary</p>
                    <p class="m-0">More <i class="fa fa-chevron-right"></i></p>
                  </div>

                  <div class="card">
                    <div class="table-responsive">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr class="">
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Product</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Price Sell</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Unit</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Price Buy</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Unit</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Net</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="">
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">96.50%</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">0.00</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">0.00</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-danger text-center font-weight-bold mb-0">$2,500</td>
                          </tr>
                          <tr class="">
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div>
                  <div class="text-white d-flex justify-content-between">
                    <p class="m-0">Outstanding</p>
                    <p class="m-0">More <i class="fa fa-chevron-right"></i></p>
                  </div>

                  <div class="card">
                    <div class="table-responsive">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr class="">
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Product</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Price Sell</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Unit</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Price Buy</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Unit</th>
                            <th class="text-xs text-center font-weight-bold mb-0 px-0">Net</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="">
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">96.50%</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">0.00</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">0.00</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-yellow text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-danger text-center font-weight-bold mb-0">$2,500</td>
                          </tr>
                          <tr class="">
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                            <td class="text-xs text-center font-weight-bold mb-0">$2,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-lg-4 mb-lg-0">
                <div class="card">
                  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <div class="d-flex justify-content-between">
                      <p class="font-weight-bold">Gold 96.50%</p>
                      <p class="font-weight-bold"><i class="fa fa-circle text-primary pe-2"></i> Settle Trade</p>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="card-body pt-2">
                    <div class="row">
                      <div class="col-lg-8 px-1">
                        <div class="row">
                          <div class="col-12">
                            <div class="dropdown">
                              <button class="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                              -- Select Subpplier --
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">บริษัท StoneX APAC Pte.LTD.</a></li>
                                <li><a class="dropdown-item" href="#">บริษัท S.E.A Bullion Pte.Ltd.</a></li>
                                <li><a class="dropdown-item" href="#">บริษัท MKS (Switzerland) SA.</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col-8 pe-1">
                            <div class="dropdown">
                              <button class="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                -- Purity --
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">99.99% Oz</a></li>
                                <li><a class="dropdown-item" href="#">99.99% Kg</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-4 ps-1">
                            <div class="form-group">
                                <input class="form-control" type="number" value="23" id="example-number-input">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 px-1">
                        <div>
                            <div class="form-group">
                                <input class="form-control" type="number" value="23" id="example-number-input">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Spot" disabled type="number" value="" id="example-number-input">
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col px-1">
                      <div class="btn btn-danger">Sell</div>
                    </div>
                    <div class="col px-1 text-end">
                        <div class="btn btn-success">Buy</div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col px-1">
                      <div class="btn btn-primary">Edit/View</div>
                    </div>
                    <div class="col px-1 text-end">
                        <div class="btn btn-white">Net Settle</div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6">
                        <p class="font-weight-bold m-0 text-primary">รับซื้อ</p>
                        <p class="m-0 py-1 text-primary">36,543.70  *  4.47</p>
                        <ul class="m-0 p-0" style="list-style: none;">
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Win</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Lost</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	36,124.02  *  2.47</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 		36,124.02  *  2.47</li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <p class="font-weight-bold text-end m-0 text-primary">รับซื้อ</p>
                        <p class="m-0 py-1 text-primary">34,995.21  *  7.37</p>
                        <ul class="m-0 p-0" style="list-style: none;">
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Win</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Lost</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	35,165.79 *  3.37</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	32,594 * 2</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	37,109 * 2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-4 mb-lg-0">
                <div class="card mt-3 mt-lg-0">
                  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <div class="d-flex justify-content-between">
                      <p class="font-weight-bold">Gold 99.99%</p>
                      <p class="font-weight-bold"><i class="fa fa-circle text-primary pe-2"></i> Settle Trade</p>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="card-body pt-2">
                    <div class="row">
                      <div class="col-lg-8 px-1">
                        <div class="row">
                          <div class="col-12">
                            <div class="dropdown">
                              <button class="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                              -- Select Subpplier --
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">บริษัท StoneX APAC Pte.LTD.</a></li>
                                <li><a class="dropdown-item" href="#">บริษัท S.E.A Bullion Pte.Ltd.</a></li>
                                <li><a class="dropdown-item" href="#">บริษัท MKS (Switzerland) SA.</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col-8 pe-1">
                            <div class="dropdown">
                              <button class="btn btn-primary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                -- Purity --
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">99.99% Oz</a></li>
                                <li><a class="dropdown-item" href="#">99.99% Kg</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-4 ps-1">
                            <div class="form-group">
                                <input class="form-control" type="number" value="23" id="example-number-input">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 px-1">
                        <div>
                            <div class="form-group">
                                <input class="form-control" type="number" value="23" id="example-number-input">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Spot" disabled type="number" value="" id="example-number-input">
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col px-1">
                      <div class="btn btn-danger">Sell</div>
                    </div>
                    <div class="col px-1 text-end">
                        <div class="btn btn-success">Buy</div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col px-1">
                      <div class="btn btn-primary">Edit/View</div>
                    </div>
                    <div class="col px-1 text-end">
                        <div class="btn btn-white">Net Settle</div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6">
                        <p class="font-weight-bold m-0 text-primary">รับซื้อ</p>
                        <p class="m-0 py-1 text-primary">36,543.70  *  4.47</p>
                        <ul class="m-0 p-0" style="list-style: none;">
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Win</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Lost</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	36,124.02  *  2.47</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 		36,124.02  *  2.47</li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <p class="font-weight-bold text-end m-0 text-primary">รับซื้อ</p>
                        <p class="m-0 py-1 text-primary">34,995.21  *  7.37</p>
                        <ul class="m-0 p-0" style="list-style: none;">
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Win</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> Select All Lost</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	35,165.79 *  3.37</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	32,594 * 2</li>
                          <li><i class="fa fa-circle text-primary pe-2"></i> 	37,109 * 2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-lg-0">
                <div class="card mt-3 mt-lg-0">
                  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <div class="d-flex justify-content-between">
                      <p class="font-weight-bold">Gold 96.50%</p>
                      <p class="font-weight-bold"><i class="fa fa-circle text-primary pe-2"></i> Manage Price</p>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv1</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row py-2">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv2</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv3</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row py-2">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv4</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv5</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                  </div>
                  <div class=" text-center">
                    <button type="button" class="btn btn-primary w-50">Edit</button>
                  </div>
                </div>
                <div class="card mt-3">
                  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <div class="d-flex justify-content-between">
                      <p class="font-weight-bold">Gold 99.99%</p>
                      <p class="font-weight-bold"><i class="fa fa-circle text-primary pe-2"></i> Manage Price</p>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv1</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row py-2">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv2</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv3</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row py-2">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv4</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                    <div class="row">
                      <div class="col">-5</div>
                      <div class="col text-success pe-0">30,894</div>
                      <div class="col">Lv5</div>
                      <div class="col text-danger ps-0">30,949</div>
                      <div class="col text-end">5</div>
                    </div>
                  </div>
                  <div class=" text-center">
                    <button type="button" class="btn btn-primary w-50">Edit</button>
                  </div>
                </div>
            </div>
            </div>



          </div>

          <!-- ฝั่งขวา -->
          <div class="col-lg-2">
            <div class="card card-carousel overflow-hidden">
                  <div class="card-body px-2">
                    <div class="row">
                      <p class="text-center font-weight-bold text-primary">Collateral Status</p>
                      <div>
                        <ul class="p-0 m-0 d-flex justify-content-around" style="list-style: none;">
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle text-primary pe-2"></i> 
                            <span>Online</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Pause</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Stop</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <p class="text-center font-weight-bold text-primary">Cash Balance Status</p>
                      <div>
                        <ul class="p-0 m-0 d-flex justify-content-around" style="list-style: none;">
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle text-primary pe-2"></i> 
                            <span>Online</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Pause</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Stop</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <p class="text-center font-weight-bold text-primary">Feed Type</p>
                      <div>
                        <ul class="p-0 m-0 d-flex justify-content-around" style="list-style: none;">
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Normal</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle text-primary pe-2"></i> 
                            <span>Backup</span>
                          </li>
                          <li class="d-flex flex-column align-items-center">
                            <i class="fa fa-circle pe-2"></i> 
                            <span>Auto</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-12">
                        <div class="btn btn-primary w-100 mb-0">Save</div>
                      </div>
                    </div>
                  </div>
            </div>
            
            <!-- Edit Price -->
            <div class="card bg-primary text-white card-carousel overflow-hidden p-0 mt-3">
                <div class="card-body px-2">
                  <p class="font-weight-bold ">Edit Price</p>
                  <hr>
                  <div class="row">
                    <div class="col-6 col-lg-12 text-xs">ราคาในการคำนวน</div>
                    <div class="col-6 col-lg-12">
                      <div class="dropdown">
                          <button class="btn btn-outline-white btn-sm dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            -- Purity --
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Ask</a></li>
                            <li><a class="dropdown-item" href="#">Bid</a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-7 text-xs pe-0">อัตราแลกเปลี่ยน</div>
                    <div class="col-5">35.55</div>
                  </div>
                  <div class="row">
                    <div class="col-7 text-xs">Premium</div>
                    <div class="col-5">35.55</div>
                  </div>
                  <div class="row">
                    <div class="col-7 text-xs">MeltingCost</div>
                    <div class="col-5">35.55</div>
                  </div>
                  <div class="row">
                    <div class="col-7 text-xs">Spread Kg	</div>
                    <div class="col-5">35.55</div>
                  </div>
                  <div class="row">
                    <div class="col-7 text-xs">Spread Bg</div>
                    <div class="col-5">35.55</div>
                  </div>
                  <div class="row">
                    <div class="col-6 col-lg-12"><button type="button" class=" w-100 btn btn-white">Cancel</button></div>
                    <div class="col-6 col-lg-12"><button type="button" class=" w-100 btn btn-white">Save</button></div>
                  </div>
                </div>
            </div>


              <!-- * Create Special Price * -->
              <div class="card bg-white text-primary card-carousel overflow-hidden p-0 mt-3">
              <div class="card-body px-3 px-lg-2">
                <p class="font-weight-bold ">*Create Special Price*</p>
                <hr>

                <div class="row">
                  <div class="col-6">
                    <h4 class="text-primary">Trade Type</h4>
                    <div class="row">
                      <div class="co-12">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="purity" id="buy" checked>
                          <label class="form-check-label" for="buy">Buy</label>
                        </div>
                      </div>
                      <div class="co-12">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="purity" id="sell">
                          <label class="form-check-label" for="sell">Sell</label>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-6">
                    <h4 class="text-primary">Gold Type</h4>
                    <div class="row">
                      <div class="co-12">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="goldType" id="ninetyNine" checked>
                          <label class="form-check-label" for="ninetyNine">99.99%</label>
                        </div>
                      </div>
                      <div class="co-12">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="goldType" id="ninetySix">
                          <label class="form-check-label" for="ninetySix">96.50%</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- button group -->
                
                <div class="row">
                  <div class="col-6 col-lg-12"><button type="button" class=" w-100 btn btn-primary">Cancel</button></div>
                  <div class="col-6 col-lg-12"><button type="button" class=" w-100 btn btn-primary">Save</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        
  `,
  styles: [`

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  .card {
    &--bg-summay {
      background: rgb(1,45,83);
    }
    
    &--bg-outstanding {
      background: rgb(33,37,41);
    }
  }

    .text-yellow {
      color: #E6BB47;
    }

      /* .table> :not(caption)>*>* {
          border-bottom-width: 1px;
          box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
      } */
    /* .table thead tr {
      display: flex;
      justify-content: space-around;
      border: 1px solid green;
    } */
    /* .table thead th {
      flex: 1;
      border: 1px solid red;
      padding: 0;
      text-align: center;
    } */
  
  `]
})
export class HomeComponent {

}
