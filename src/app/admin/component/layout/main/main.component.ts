import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listProduct:any;
  
  list:any;

  constructor(private blogService:BlogService,private route :Router) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe((data)=>{
      return this.listProduct = data;
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
