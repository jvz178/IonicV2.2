import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token: any;

  constructor(public restService: RestService) {
    this.hacerLogin();
   }

  ngOnInit() {
  }

  hacerLogin(){
    this.restService.login('raulreyes@gmail.com','123456').then(data => {
      console.log(data);
      this.token = data;
    });
  }

}
