import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  document: Document;

  serv:any;
  Tod:any;

  constructor(@Inject(DOCUMENT) document: Document, testserv : TestService) {
    this.document = document;
    this.serv=testserv;
    
   }
  ngOnInit(): void {
    this.Tod=this.serv.showtodaysdate();
   
  }
 
 

}
