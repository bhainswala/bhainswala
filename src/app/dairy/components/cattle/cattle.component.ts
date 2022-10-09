import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  description='स्वस्थ पशु, सही दाम पे खरीदें/बेचें'

  currentIndex: any = -1;
  showFlag: any = false;
  public phone = "918521971829"
  public title = "Hey User Welcome to Bhainswala";
  imageObject: Array<any> = [{
      image: '../../../assets/img/dairy.jpg',
      thumbImage: '../../../assets/img/dairy.jpg',
      // title: 'Dairy Img 1'
  }, {
      image: '../../../assets/img/dairy.jpg',
      thumbImage: '../../../assets/img/dairy.jpg',
      // title:'Dairy Img 1'
  },
  //  {
  //     video: 'https://youtu.be/tYa6OLQHrEc',
  //     posterImage: 'https://img.youtube.com/vi/tYa6OLQHrEc/hqdefault.jpg',
  //     title: 'Youtube example one with title.'
  // },
  // {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     title: 'Most beautiful birds in the world flying.'
  // }
];

  baseUrl: any;


  constructor(
    private diaryService: DairyService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.dairyId = params['id']
      }
    });
    this.getCattleList()
    this.baseUrl = this.router.url

  }
  getCattleList() {
    this.diaryService.getCattleList(this.dairyId).subscribe((response: any) => {
      if (response && response.data) {
        this.cattleList = response.data
        this.setImages(response.data)
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
  setImages(data:any){
    data = data.map((each: any) => {
      this.imageObject[0].image = each.image1_link
      this.imageObject[0].thumbImage = each.image1_link
      this.imageObject[1].image = each.image2_link
      this.imageObject[1].thumbImage = each.image2_link
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
  showLightbox(index:any) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
