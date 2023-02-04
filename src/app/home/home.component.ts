import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nam : string = "Hello home Component"

  document:any;
  visibility=true;
  mobiles:string[]=['Samsung','Apple','Vivo'];

  capletter="HELLO HOW ARE YOU";
  loletter="hello world";
  date=new Date();
  amount = 99546;
  sev:any;
  todaydate:any;
  
  user:User;
  constructor(@Inject(DOCUMENT) document: Document, testser: TestService) {
    this.document = document;
    this.sev = testser;
    this.user = new User;
   }
  

  ngOnInit(): void {
    this.todaydate = this.sev.showtodaysdate();
  }
  printdata(){
    
    alert("button on click "+ this.document.getElementById('txt1').value);
  }
  printUser(){
    console.log('Id : ',this.user.id);
    console.log('Name : ',this.user.name);
    console.log('Age : ',this.user.age);
    
  }
  printd(){
    this.sev.alertdata();
    alert("double click")
  }
  printda(){
    alert("mouse enter")
  }
  callinghomecomdata(){
    alert("This is called from home component " +this.document.getElementById('txt1').value);
  }

}
