import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  homecomp :any;

  ngOnInit():void{

  }
  
  constructor(home:HomeComponent){
  this.homecomp = home;
  }
  title = 'testapp1';
  name : string = "Naga Madhu Babu";
  value = 10;
  databindtwoway :any;
  
  

  printdata(){
    //alert('button click completed..!' + this.databindtwoway);
    this.homecomp.callinghomecomdata();
  }

}


