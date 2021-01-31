import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  token: any;
  offers: any;

  constructor(public restService: RestService,) {
    this.hacerLogin();
    this.obtenerOfertas();
  }

  hacerLogin(){
    this.restService.login('raulreyes@gmail.com','123456').then(data => {
      console.log(data);
      this.token = data;
      console.log("Login realizado");
      console.log("Token: "+this.token);
    });
  }

  obtenerOfertas(){
    this.restService.getOffers().then((res: any) => {
      if (res.sucess){
        this.offers = res.data;
        console.log(this.offers);
      }
    },
    (error) =>{
      console.error(error);
    }
    );
  }
}
