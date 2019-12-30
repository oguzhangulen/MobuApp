import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatBadgeModule } from "@angular/material/badge";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { appRoutes } from "./routes";
import { NgxEditorModule } from "ngx-editor";
import { AlertifyService } from "./services/alertify.service";
import { NavComponent } from "./nav/nav.component";
import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from "./event/eventDetail/eventDetail.component";
import { LoginDialogComponent } from "./nav/LoginDialog/LoginDialog.component";
import { RegisterDialogComponent } from "./nav/RegisterDialog/RegisterDialog.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
   declarations: [
      ProfileComponent,
      AppComponent,
      NavComponent,
      EventComponent,
      EventDetailComponent,
      LoginDialogComponent,
      RegisterDialogComponent,
   ],
   imports: [
      MatProgressBarModule,
      MatBadgeModule,
      MatSelectModule,
      MatCardModule,
      MatDatepickerModule,
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatMenuModule,
      MatButtonModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatIconModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule
   ],
   entryComponents: [
      LoginDialogComponent,
      RegisterDialogComponent
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
