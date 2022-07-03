import { Component, OnInit } from '@angular/core';
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

  constructor(private blogService:BlogService,private actRoute:ActivatedRoute,private nhap:NhapService) { }

  ngOnInit(): void {
    let _id = this.actRoute.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      this.listProduct = data;
    })
  }
  clickImg():void{
    
  }

}
