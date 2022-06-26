import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Model/blog';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listBlog:Blog = new Blog;

  constructor(private blogService:BlogService,private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let _id = this.actRouter.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      this.listBlog = data;
    })
  }

}
