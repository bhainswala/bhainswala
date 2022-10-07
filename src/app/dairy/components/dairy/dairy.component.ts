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
        console.log(this.userVideoLink);
        
      }
    })
    
    
  }
  videoPlay(video:any){
    console.log('video',video);
    
    if(video.fullscreenElement){
      console.log('ratnam');
      
    }

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
