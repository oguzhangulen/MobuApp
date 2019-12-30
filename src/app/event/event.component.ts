import { Component, OnInit } from '@angular/core';
import{Event} from '../models/Event';
import { EventService } from '../services/event.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  cityid:any;
  cityname:any;
  events:Event[];
  addevent: FormGroup;
  eventform:any;
  userid:number;
  AddEvent={};
  constructor(private eventService:EventService,private authService:AuthService,private formBuilder: FormBuilder) { }
  createEventForm() {
    this.addevent = this.formBuilder.group({
      getevent: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.eventService.GetEvents().subscribe(data=>{
      this.events=data;
      this.sortProduct("Up", "DESC");
    })
    this.createEventForm();
  }
  sortProduct<T>(propName: keyof Event, order: "ASC" | "DESC"): void {
    this.events=this.events || [];
    this.events.sort((a, b) => {
        if (a[propName] < b[propName])
            return -1;
        if (a[propName] > b[propName])
            return 1;
        return 0;
    });
    if(order==="DESC")
    this.events.reverse();
}
  eventUp(eventitem:any)
  {
    eventitem.up+=1;
    console.log(eventitem);
    this.eventService.updateEvent(eventitem);
  }
  add() {
    if (this.addevent.valid) {
      this.eventform = Object.assign({}, this.addevent.value);
      this.AddEvent={
        'userId':this.authService.getCurrentUserId(),
        'Description':this.eventform.getevent,          
      }
      console.log(this.AddEvent);
      this.eventService.addEvent(this.AddEvent as Event)
      // this.AddComment.userId = this.authService.getCurrentUserId();
      // this.AddComment.EventId=String(this.getevent.id);
      // this.AddComment.Comment=this.eventcomment.comment;
      // this.eventService.addComment(this.AddComment);
    }
  }
  isAuthenticated() {
    return this.authService.loggedIn();
  }
  getCityName(){
    this.cityname=this.authService.GetCityNamebyUser();
  }

}
