import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listProduct:any;
  keyword:any;

  constructor(private blogService:BlogService,private route :Router,private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any;
    this.actRouter.paramMap.subscribe(param=>{
      id = param.get('id');
      if(id == 1 || id ==2 || id==3||id==4||id==5||id==6||id==7||id==8||id==9||id==10||id==11||id==12){
        this.blogService.getFilterList(id).subscribe((data)=>{
          this.listProduct = data;
        })
      }else{
        this.blogService.getAll().subscribe((data)=>{
          this.listProduct = data;
        })
      }
    })
  }
  getList(){
    this.blogService.getAll().subscribe((data)=>{
      return this.listProduct = data;
    })
  }
  deleteItem(id:number){
    let confirmResult = confirm('bạn có muốn xoá không');
    if(confirmResult){
      this.blogService.delete(id).subscribe((data)=>{
        this.listProduct = data;
        this.getList();
        
      })
      
    }
  }

}
