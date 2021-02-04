import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { registerLocaleData } from "@angular/common";
//import { resolve } from "dns";

@Injectable({
  providedIn: "root",
})
export class RestService {
  
  apiUrl = "https://allsites.es/sales_in_api/public/api";
  token: any;
  token2= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTZjOWY0OTMzNzA0MTBjMzI1YjUyZDZiZmE5ZTJlYzhmMmI4NTdkZGFmZDE1YTk4YTg5NWRjY2ZkYTkyNmE3NGQ5Yzg3Y2IxYjcyNmI4ZjAiLCJpYXQiOjE2MTIxNzYwNTksIm5iZiI6MTYxMjE3NjA1OSwiZXhwIjoxNjQzNzEyMDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mXPSX-KlKSq-4ibqFNcRj2HXHdvrpsyi7OK1oSObU7vCVnpXjNugaEZN3ZnYJ9GM_myDvuVGabPJ7YV2jqU1cEI8uCMn624ng0NLLR5Pu4EESW6QkM5VJT7Va3zDlfbTZPLhFSSI0z0DrfQFus6PKG8n_aU7XafY27IHGkCqNVBUvwj8nr0bg2cJrpoOYrvmKroy0DSWaWd0ZTT4ufno7iUMTqFFDDJaVZw9-jE07sehGt72QkytOYGNWBqHL0J5ZT6xftu7a7Wsdl7RarCynKsq0Wia6R74ZRJtjBjEk2TkJ9j4OyxqNFyPZqdPfEmPKWQUPSSp_aPMmK8Sjavvx71njO2I7JRBkB2EVCzzAq7e8y1zL6GuPa69getUT7sZi10-RV3xG69A1O_vu-o_WVO0eEG_ITsbV2ZAO_Ew8zT9LpvFCg7gurN4W3_qtSrkvqFr8lMw0R-ihTmgdqpRewe7ty3cdAm24UcryTefssHH36U5egdC-gcyFaPfL7uD3rGPM0QNtiyrgMuei11kEZZ3NYrfQiZYQsdZcmneGg9SihVqBAnO5rT-M-YriZEZYYY46PkHAxpu4V7uD8aBwEdOgBn9YoOrwjo3yF4Bvl1qctY3xptkpkv3pOvMoBrkHHexKR5AJ7HqyoQA2ZFmkOV0y1cXAgY98PMdXgPiBYo';

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
    return new Promise<any>((resolve) => {
      this.http.get(this.apiUrl + "/offers", { 
        headers: new HttpHeaders().set('Authorization','Bearer ' + this.token2),
      }).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err)
        }
      );
    });

  }

  getCicles(){
    return new Promise<any>((resolve) => {
      this.http.get(this.apiUrl + "/cicles"
      ).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err)
        }
      );
    });
  }

  register(name:String, surname:String, email:String, password:String, c_password:String, cicle_id: String){
    return new Promise((resolve) => {
      this.http.post(this.apiUrl+"/register", {
        name: name,
        surname: surname,  
        email: email,
        password: password,
        c_password: c_password,
        cicle_id: cicle_id,
      }).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
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
