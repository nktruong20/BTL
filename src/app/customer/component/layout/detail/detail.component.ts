import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhapService } from 'src/app/nhap/nhap.service';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listProduct:any;
  sliderImg:any = [];


  constructor(private blogService:BlogService,private actRoute:ActivatedRoute,private nhap:NhapService,private el:ElementRef) { }

  ngOnInit(): void { 
    let _id = this.actRoute.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      // this.sliderImg = data.allImg;
      this.listProduct = data
    })
  }
  clickImg():void{
    
  }
  @HostListener('click')
  imageChange(){
  //   var src:any = this.el.nativeElement.src;
  //   var mainImg:any = document.getElementById('mainImg');
  //   // console.log(mainImg)
  //   mainImg.src = src;
  //   var imageSlide = document.getElementsByClassName("col-md-3");
  //   for (let i = 0; i < imageSlide.length; i++) {
  //       imageSlide[i].classList.remove('active')
      
  //   }
  //   this.el.nativeElement.parentElement.classList.add("active")

  // }
  console.log(this.el.nativeElement)
  }
}
