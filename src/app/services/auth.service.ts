import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";
import { JwtHelperService} from "@auth0/angular-jwt";
import { UserForLogin } from "../models/userForLogin";
import { UserForRegister } from "../models/userForRegister";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  path = "https://localhost:44392/api/Auth/";
  userToken: any;
  decodedToken: any;
  TOKEN_KEY = "token";
  helper: JwtHelperService = new JwtHelperService();
  login(loginuser: UserForLogin) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "login", loginuser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.helper.decodeToken(data.toString());
        this.alertifyService.success("Sisteme giriş yapıldı");
        this.router.navigateByUrl("/event");
      });
  }
  register(registerUser: UserForRegister) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data => {});
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error("Sistemden çıkış yapıldı");
  }

  loggedIn() {
    // return tokenNotExpired(this.TOKEN_KEY)
    return this.helper.isTokenExpired(this.token);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserId() {
    return this.helper.decodeToken(this.token).nameid;
  }
  getCurrentUserName() {
    return this.helper.decodeToken(this.token).name;
  }
}
