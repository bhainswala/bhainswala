import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DairyService } from '../../services/dairy.service';

@Component({
  selector: 'app-cattle',
  templateUrl: './cattle.component.html',
  styleUrls: ['./cattle.component.scss']
})
export class CattleComponent implements OnInit {
  cattleList: any
  sub: any;
  dairyId: any;
  videoDetailLink: any;
  videoDetail: boolean = false;
  defaultImage = '../../../assets/img/dairy.jpg';
  video_link = "https://s3-ap-south-1.amazonaws.com/filestorage-bw/dairy_video__1"

  constructor(
    private diaryService: DairyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.dairyId = params['id']
      }
    });
    this.getCattleList()

  }
  getCattleList() {
    this.diaryService.getCattleList(this.dairyId).subscribe((response: any) => {
      if (response && response.data) {
        this.cattleList = response.data
        this.getDeliveryDate()
      }
    })

  }
  getDeliveryDate() {
    this.cattleList = this.cattleList.map((each: any) => {
      var date1 = new Date(each.deliver_date)
      var date2 = new Date();

      // To calculate the time difference of two dates
      var Difference_In_Time = date2.getTime() - date1.getTime();

      // To calculate the no. of days between two dates
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      each.cal_delivery_date = Math.floor(Difference_In_Days);

      return each
    })

  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }

  }


  videoClick() {
    let video = <HTMLVideoElement>document.getElementById("video")
    if (video && video?.requestFullscreen) {
      video?.requestFullscreen();
      video.play()
      
    }
    else {
      document.exitFullscreen();
    }
    

  }

}
