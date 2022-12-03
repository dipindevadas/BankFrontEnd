import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution

  aim="Your perfect banking partner";

  acno='';
  pswd='';
  //class-collection of properties and method
//properties/variables
//userdefined methods(4th execution          )

//login model
loginForm=this.fb.group({//group
  // uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],//array
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-z]*')]]
}
)


//dependency injection
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {  //first execution
  // it automatically invoke when object is created
  }


  ngOnInit(): void {//2nd execution
    //for initail process of  component
    //lifecycle hook of angular
  }
    
     acnoChange(event:any){
      console.log(event);
      this.acno=event.target.value;
      console.log(this.acno);
      
      
     }
     pswdChange(event:any){
      this.pswd=event.target.value;
      console.log(this.pswd);
      
     }
    //  login(a:any,p:any){
    //   // alert('login clicked')
    //   var acno=a.value;
    //   var pswd=p.value;
    //   var userDetails=this.userDetails;

    //   if(acno in userDetails){
    //     if(pswd==userDetails[acno]['password'])
    //     {
    //         alert('login successfull')
    //     }
    //     else{
    //       alert('invalid password')
    //     }
    //   }
    //   else{
    //     alert('invalid user datails')
    //   }
    // }
    login(){
      // alert('login clicked')
      console.log(this.loginForm);
      
      var acno=this.loginForm.value.acno;
      var pswd=this.loginForm.value.pswd;
      var userDetails=this.ds.userDetails;
      
      if(this.loginForm.valid)
      {
        console.log(this.loginForm.get('uname')?.errors);
        


      const result=this.ds.login(acno,pswd)
      if(result)
      {
        alert('login successfull');
            this.router.navigateByUrl('dashboard');
      }
      else{
        alert('login failed');
        this.router.navigateByUrl('login')
      }
      

      }
      else
      {
        alert("invalid form")
      }



      }
    }
    //   if(acno in userDetails){
    //     if(pswd==userDetails[acno]['password'])
    
    //     {
           
    //     }
    //     else{
    //       alert('invalid password')
    //     }
    //   }
    //   else{
    //     alert('invalid user datails')
    //   }
    // }

