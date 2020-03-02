import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  n:number = 0;

  constructor() { }

  aumenta(){
    this.n++
  }

  diminui(){
    this.n--
  }

  ngOnInit(): void {
  }

}
