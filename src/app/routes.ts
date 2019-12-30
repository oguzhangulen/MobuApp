import { Routes } from '@angular/router';
import { EventDetailComponent } from './event/eventDetail/eventDetail.component';
import { EventComponent } from './event/event.component';
import { ProfileComponent } from './profile/profile.component';

export const appRoutes:Routes=[    
    { path: "event", component: EventComponent },
    { path: "profile", component: ProfileComponent },
    { path: "eventDetail/:eventid", component: EventDetailComponent },
    { path: "**", redirectTo: "event", pathMatch: "full" }
]
