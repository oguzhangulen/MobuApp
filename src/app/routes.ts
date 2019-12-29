import { Routes } from '@angular/router';
import { EventDetailComponent } from './event/eventDetail/eventDetail.component';
import { EventComponent } from './event/event.component';

export const appRoutes:Routes=[    
    { path: "event", component: EventComponent },
    { path: "eventDetail/:eventId", component: EventDetailComponent },
    { path: "**", redirectTo: "event", pathMatch: "full" }
]
