import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  token: any;
  products: any;

  constructor(public restService: RestService) {
    this.hacerLogin();
  }

  hacerLogin(){
    this.restService.login().then(data => {
      this.token = data;
    })
  }

  obtenerProducts(){
    this.restService.getProducts(this.token)
      .then(data => {
        this.products = data;
      });
  }
  

  }


