import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RestService {
  
  apiUrl = "https://allsites.es/sales_in_api/public/api";
  token: any;

  constructor(private http: HttpClient) {}

  getArticles() {
    return new Promise((resolve) => {
      this.http.get(this.apiUrl + "/articles", {}).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
         
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  getOffers() {
    return new Promise((resolve) => {
      this.http.get(this.apiUrl + "/offers", {}).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (err) => {
          console.log(err)
        }
      );
    });
    //throw new Error('Method not implemented.');
  }
  login(email:String, password:String) {
    return new Promise((resolve) => {
      this.http
        .post(this.apiUrl + "/login", {
          email: email,
          password: password,
        })
        .subscribe(
          (data) => {
            this.token = data;
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }
}
