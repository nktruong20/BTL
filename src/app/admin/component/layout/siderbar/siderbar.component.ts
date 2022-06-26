import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {
  listCategory:any;

 
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {  
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCategory = data;
    })

  }

}
