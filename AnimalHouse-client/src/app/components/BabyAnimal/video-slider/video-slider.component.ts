import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { PexelPhotoService } from "../../../services/pexel-photo.service";
import SwiperCore, { Pagination } from "swiper";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})

  //Serve per prendere i video dalle API di Pexels, sceglie i video migliori per risoluzione
  //e li mette dentro l'array urls
export class VideoSliderComponent implements OnInit {
  httpClient: any;
  videos?: any;
  link: string ="";
  indice: number = 0;
  stop: boolean = false;
  urls?: string[] = [''];
  primoUrl?: any = 'aa';


  constructor(private pexelService: PexelPhotoService) {
    this.pexelService.getData().subscribe(data => {
      this.videos = data.media;
      this.getHD();
    });
  }

  ngOnInit(): void {
  }

  //Tra i video disponiobili sceglie quello con la risoluzione migliore
  getHD(): any{
    this.videos.forEach((video: any)=> {
      let maxQualita = 0;
      for(let i = 1; i<video.video_files.length; i++){
          if(video.video_files[i].quality != 'hls'){
            if(video.video_files[maxQualita].height < video.video_files[i].height)
            maxQualita = i;
          }
      }
      this.urls?.push(video.video_files[maxQualita].link);
    })

    this.urls?.shift();
    this.primoUrl = this.urls?.shift();
  }

  /*activeMethod(): void{
    document.getElementsByClassName('carousel-inner')[0].setAttribute("class", "active");
  }*/
  
}

