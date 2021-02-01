import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  token: any;
  articles: any;

  constructor(public restService: RestService) {
    // this.hacerLogin();
  }

  // hacerLogin(){
  //   this.restService.login().then(data => {
  //     this.token = data;
  //   })
  // }

  // obtenerArticles(){
  //   this.restService.getArticles(this.token)
  //     .then(data => {
  //       this.articles = data;
  //     });
  }
  

  


