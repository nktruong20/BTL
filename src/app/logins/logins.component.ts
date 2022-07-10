import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  contactData:any;
  check:any;


  constructor(private http:HttpClient,private route:Router,private acc:AccountService) { }

  ngOnInit(): void {
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    // console.log(this.check)
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupForm").subscribe((data)=>{
      const user = data.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      })
      if(user){
        alert("Đăng Nhập Thành Công ! ");
        this.loginForm.reset();
        localStorage.setItem('loginForm',JSON.stringify(user)),
        this.route.navigate(['/']);
      }else{
        alert('Đăng Nhập Thất Bại ! Vui Lòng Kiểm Tra Lại')
      }
    })
    this.checkLoginAdmin(this.loginForm.value)
   
  }
  checkLoginAdmin(data:any):void{
    this.acc.getAll().subscribe(datas =>{
      var check = datas.find((item:any)=> item.email == data.email && item.password == data.password && item.role === 'admin');
      if(check){
        localStorage.setItem('adminLogin',JSON.stringify(check));
        this.route.navigate(['/admin'])
      }else{
        console.log('sai')
      }
    })
  }


}
