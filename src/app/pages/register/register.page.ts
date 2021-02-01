import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: any;
  surname: any;
  email: any;
  password: any;
  c_password: any;
  cicle_id: any;

  constructor(public restService: RestService, private router:Router) { }

  ngOnInit() {
  }

  registrarUsuario(){
    this.restService.register(this.name, this.surname, this.email, this.password, this.c_password, this.cicle_id)
    .then(data => {
      console.log(data);
      if(data){
        this.router.navigateByUrl("/tabs/tab1");
      }
    })
  }
}
