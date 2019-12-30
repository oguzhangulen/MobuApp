import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "src/app/services/event.service";
import { Event } from "src/app/models/Event";
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Comments } from 'src/app/models/Comments';

@Component({
  selector: "app-eventDetail",
  templateUrl: "./eventDetail.component.html",
  styleUrls: ["./eventDetail.component.css"]
})
export class EventDetailComponent implements OnInit {
  getevent: Event;
  addcomment: FormGroup;
  eventcomment:any;
  userid:number;
  AddComment={};
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  createCommentForm() {
    this.addcomment = this.formBuilder.group({
      comment: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getEventById(params["eventid"]);
    });
    this.createCommentForm();
  }
  getEventById(eventid) {
    this.eventService.getEventById(eventid).subscribe(data => {
      this.getevent = data;
      console.log(this.getevent);
    });
  }
  add() {
    if (this.addcomment.valid) {
      this.eventcomment = Object.assign({}, this.addcomment.value);
      this.AddComment={
        'userId':this.authService.getCurrentUserId(),
        'EventId':this.getevent.id,
        'Comment':this.eventcomment.comment,          
      }
      console.log(this.AddComment);
      this.eventService.addComment(this.AddComment as Comments)
      // this.AddComment.userId = this.authService.getCurrentUserId();
      // this.AddComment.EventId=String(this.getevent.id);
      // this.AddComment.Comment=this.eventcomment.comment;
      // this.eventService.addComment(this.AddComment);
    }
  }
  isAuthenticated() {
    return this.authService.loggedIn();
  }
}
