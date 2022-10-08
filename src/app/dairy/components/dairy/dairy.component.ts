import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DairyService } from '../../services/dairy.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss']
})
export class DairyComponent implements OnInit {
  dairyList:any=[]
  userVideoLink: any;
  firstDairy: any;
  type: any ;
  defaultImage = '../../../assets/img/dairy.jpg';
  public phone = "918521971829"
  public title = "Hey User Welcome to Bhainswala";
  constructor(
    private dairyService:DairyService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDairyList()
  }

  getDairyList(params?:string){
    this.dairyService.getDairyList(params).subscribe((res:any)=>{
      if(res && res['data']){
        this.dairyList = res['data']   
        this.userVideoLink = this.dairyList[0].video_link
        this.phoneNumberCode()
      }
    })
    
    
  }
  phoneNumberCode(){
    this.dairyList = this.dairyList.map((each:any)=>{
      each.user_phone_number = '91'+ each.user_phone_number
      return each

    })
  }
  buffeloType(type:any){
    if (type=='TB'){
      this.type='TB'
      this.getDairyList('TB')
    }else{
      this.type='BA'
      this.getDairyList('BA')
    }
  }
}
