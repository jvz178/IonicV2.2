import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  token: any;
  articles: any;

  constructor(public restService: RestService,) {
    this.hacerLogin();
    this.obtenerArticles();
   
    
  }
 
  hacerLogin(){
    this.restService.login('raulreyes@gmail.com','123456').then(data => {
      console.log(data);
      this.token = data;
    });
  }

    obtenerArticles(){
    this.restService.getArticles()
      .then((res: any) => {
        if (res.success) {
          this.articles = res.data;
          console.log(this.articles);
        }
      },
      (error) =>{
        console.error(error);
      }
     );}
  }
  


