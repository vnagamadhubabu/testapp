import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  servi:any;
  today:any;
  userdata: User[] = [];
  constructor(private testserviceobj : TestService){
    //this.servi = testserviceobj;
  }

  ngOnInit(): void {
   //this.today = this.servi.showtodaysdate();
  }
  loadusers(event:any){
    this.testserviceobj.getuserdata().subscribe(user=>{
      console.log(user);
      this.userdata = user;
    })
  }

}
