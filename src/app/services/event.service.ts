import { Injectable } from "@angular/core";
import { AlertifyService } from "./alertify.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Event } from "../models/Event";
import { Comments } from '../models/Comments';
import { City } from '../models/City';
@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(
    private alertifyService: AlertifyService,
    private httpClient: HttpClient,
    private rooter: Router
  ) {}
  path = "https://localhost:44392/api/";
  
  GetCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.path+"City");
  }

  GetEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.path+"Event");
  }
  getEventById(eventid:number):Observable<Event>{
    return this.httpClient.get<Event>(this.path+"Event/"+eventid)
  }

  //TO DO: AddSolution, getEventByUserId 
  addEvent(getevent:Event)
  {
    this.httpClient.post(this.path+'Event/add/',getevent).subscribe(data=>{
      this.alertifyService.success("Paylaşıldı..")
      window.location.reload();
    })
  }
  updateEvent(getevent:any)
  {
    console.log(getevent);
    this.httpClient.post(this.path+'Event/update/',getevent).subscribe(data=>{
      this.alertifyService.warning("Güncellendi..")
      this.rooter.navigateByUrl('/event')
    })
  }
  deleteEvent(getevent:Event)
  {
    this.httpClient.post(this.path+'Event/delete/',getevent).subscribe(data=>{
      this.alertifyService.warning("Paylaşımınız kaldırıldı..")
      window.location.reload();
    })
  }
  addComment(comment:Comments)
  {
    console.log("service"+comment);

    this.httpClient.post(this.path+'Comments/add',comment).subscribe(data=>{
      debugger;;
      this.alertifyService.success('Yorum eklendi..')
      window.location.reload();
      // this.rooter.navigateByUrl('/event')
    })
  }
  deleteComment(comment:Comments)
  {
    this.httpClient.post(this.path+'Comment/delete/',comment.id).subscribe(data=>{
    })
    this.alertifyService.warning("Yorumunuz kaldırıldı..")
  }
  GetEventsByUserId(userid:any):Observable<Event[]>
  {
    console.log(userid);
    return this.httpClient.get<Event[]>(this.path+"Event/userevent?id="+userid);
  }
  // getEventById(eventid:number):Observable<Event>{
  //   return this.httpClient.get<Event>(this.path+"Event/"+eventid)
  // }
}
