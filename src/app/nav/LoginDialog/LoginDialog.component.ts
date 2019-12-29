import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../nav.component';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-LoginDialog',
  templateUrl: './LoginDialog.component.html',
})
export class LoginDialogComponent implements OnInit{
  constructor(private eventService:EventService,public dialogRef:MatDialogRef<LoginDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:LoginData) { 
  }
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }
 onNoClick():void{
   this.dialogRef.close();
 }
}
