import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import{MatDialog,MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { LoginDialogComponent } from './LoginDialog/LoginDialog.component';
import { RegisterDialogComponent } from './RegisterDialog/RegisterDialog.component';
import { AlertifyService } from '../services/alertify.service';
export interface LoginData{
  username:string;
  password:string;
}
export interface RegisterData{
  Ad:string;
  Soyad:string;
  UserName:string;
  Password:string;
  Birthday:Date;
  CityName:string;
}

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  loginUsername:any;
  username:string;
  password:string;
  Ad:string;
  Soyad:string;
  UserName:string;
  Password:string;
  Birthday:Date;
  CityName:string;
  constructor(private authService: AuthService,public dialog:MatDialog,private alertService:AlertifyService) {}
  openLoginDialog():void {
    const dialogRef=this.dialog.open(LoginDialogComponent,{width:'250px',data:{username:this.username,password:this.password}});
    dialogRef.afterClosed().subscribe(result=>{
      this.userForLogin=result;
      if(this.userForLogin.username != null && this.userForLogin.password != null)
      {
        this.login();
      }
      else
      {
        this.alertService.error("Lütfen Alanları Doldurunuz");
      }
    })
  }
  openRegisterDialog():void {
    const dialogRef=this.dialog.open(RegisterDialogComponent,{width:'250px',data:{UserName:this.UserName,PassWord:this.Password,Ad:this.Ad,Soyad:this.Soyad,Birthday:this.Birthday,CityName:this.CityName}});
    dialogRef.afterClosed().subscribe(result=>{
      this.userForRegister=result;
      if(this.userForRegister.UserName != null && this.userForRegister.Password != null && this.userForRegister.CityName != null)
      {
        this.register();
      }
      else
      {
        this.alertService.error("Lütfen Alanları Doldurunuz");
      }
    })
  }
  userForLogin: any = {};
  userForRegister:any={};
  ngOnInit() {
    this.loginUsername=this.authService.getCurrentUserName();
  }
  login() {
    this.authService.login(this.userForLogin);
  }
  logOut() {
    this.authService.logOut();
  }
  isAuthenticated() {
    return this.authService.loggedIn();
  }
  register(){
    this.authService.register(this.userForRegister);
  }
}
