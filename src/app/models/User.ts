import {City} from "./City" 
export class User {
    id:number;
    Ad:string;
    Soyad:string;
    UserName:string;
    PasswordHash:any;
    PasswordSalt:any;
    Birthday:Date;
    cityId:number;
    City:City;
}
