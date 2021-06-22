import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GamingRoomReadComponent } from '../gaming-room-read/gaming-room-read.component';

@Component({
  selector: 'app-gaming-room',
  templateUrl: './gaming-room.component.html',
  styleUrls: ['./gaming-room.component.scss']
})
export class GamingRoomComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(GamingRoomReadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  ngOnInit(): void {
  }

}
