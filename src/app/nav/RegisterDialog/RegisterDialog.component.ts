import { Component, Inject, OnInit} from '@angular/core';
import { City } from 'src/app/models/City';
import { EventService } from 'src/app/services/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterData } from '../nav.component';

@Component({
  selector: 'app-RegisterDialog',
  templateUrl: './RegisterDialog.component.html',
})
export class RegisterDialogComponent implements OnInit {
  cities:City[];

  constructor(private eventService:EventService,public dialogRef:MatDialogRef<RegisterDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:RegisterData) {
    
    
   }
   ngOnInit(){
    this.eventService.GetCities().subscribe(data=>{
      this.cities=data;
   });
  }
   onNoClick():void{
    this.dialogRef.close();
  }

}
