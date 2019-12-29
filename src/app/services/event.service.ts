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
    return this.httpClient.get<Event>(this.path+"Event/?id="+eventid)
  }

  //TO DO: AddSolution, getEventByUserId 
  addEvent(event:Event)
  {
    this.httpClient.post(this.path+'Event/add',event).subscribe(data=>{
      this.alertifyService.success("Paylaşıldı..")
      this.rooter.navigateByUrl('/eventDetail/'+data["id"])
    })
  }
  updateEvent(event:Event)
  {
    this.httpClient.put(this.path+'Event/update',event).subscribe(data=>{
      this.alertifyService.warning("Güncellendi..")
      this.rooter.navigateByUrl('/event')
    })
  }
  deleteEvent(event:Event)
  {
    this.httpClient.post(this.path+'Event/delete',event).subscribe(data=>{
      this.alertifyService.warning("Paylaşımınız kaldırıldı..")
      this.rooter.navigateByUrl('/event')
    })
  }
  addComment(comment:Comments)
  {
    this.httpClient.post(this.path+'Comments/add',comment).subscribe(data=>{
      this.alertifyService.success('Yorum eklendi..')
      this.rooter.navigateByUrl('eventDetail/'+data["EventId"])
    })
  }
  deleteComment(comment:Comments)
  {
    this.httpClient.post(this.path+'Comment/delete?id=',comment.id).subscribe(data=>{
      this.alertifyService.warning("Yorumunuz kaldırıldı..")
    })
  }
}
