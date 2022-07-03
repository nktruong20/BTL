import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  blogImg:any;
  formIn4 = new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    category_id:new FormControl('',[
      Validators.required,
      Validators.pattern('[1-5]{1}')
    ]),
    price:new FormControl('',[
      Validators.required,
    ]),
    avatar:new FormControl('',[
      Validators.required,
    ])
  })
  constructor(private router:ActivatedRoute,private blogService:BlogService,private route:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.blogService.find(this.id).subscribe((data)=>{
      if(data){
        this.blogImg = data.avatar
        this.formIn4.patchValue(data)
      }else{
        console.log('404');
      }
    })
  }

  formSubmit():void{
    this.blogService.update(this.id,this.formIn4.value).subscribe((data)=>{
      if(data){
        this.route.navigate(['/'])
      }
    })
  }

  get form():any{
    return this.formIn4.controls
  }

}
