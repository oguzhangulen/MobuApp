import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  events:Event[];
  productSortOrder:boolean;
  constructor(private eventService:EventService,private authService:AuthService) { }

  ngOnInit() {
    this.eventService.GetEventsByUserId(this.getUserId()).subscribe(data=>{
      this.events=data.sort();
      this.sortProduct(p=> p.Up, "DESC");
    })
  }
  getUserId()
  {
    return this.authService.getCurrentUserId();
  }
  delete(removeEvent:any)
  {
    this.eventService.deleteEvent(removeEvent);
  }
  sortProduct<T>(prop: (c: Event) => T, order: "ASC" | "DESC"): void {
    this.events.sort((a, b) => {
        if (prop(a) < prop(b))
            return -1;
        if (prop(a) > prop(b))
            return 1;
        return 0;
    });

    if (order === "DESC") {
        this.events.reverse();
        this.productSortOrder = true;
    } else {
        this.productSortOrder = false;
    }        
}
}
