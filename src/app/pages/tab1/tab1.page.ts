import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  token: any;
  articles: any;

  constructor(public restService: RestService) {
    this.hacerLogin();
  }
  ngOnInit() {
    this.restService.getTopHeadlines()
    .subscribe(resp => {
    console.log('articles', resp);
    });
    }
  hacerLogin(){
    this.restService.login().then(data => {
      this.token = data;
    })
  }

  // obtenerArticles(){
  //   this.restService.getArticles(this.token)
  //     .then(data => {
  //       this.articles = data;
  //     });
  }
  


