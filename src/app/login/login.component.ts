import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//(3rd execution)

  aim="Your perfect banking partner";

  acno=" ";

  pswd=" ";
  //property binding -[placeholder]=""
  //class - collection of properties and methods
  //properties/variables
  //userdefined methods(4th execution)


  //database
  userDetails:any={
    1000:{acno:1000,username:'sanil',password:1000,balance:1000},
    1001:{acno:1001,username:'akhil',password:1001,balance:1000},
    1002:{acno:1002,username:'Aravind',password:1002,balance:1000}
  }

  constructor() {//(1st execution)
    //it automatically invokes when the object is created
   }

  ngOnInit(): void {//(2nd execution)
    //for initial process of component
    //lifecycle hook of Angular
  }

  // login()
  // {
  //   alert('Login clicked');
  // }




  acnoChange(event:any)
  {
    console.log(event);
    
     this.acno=event.target.value;//1000
     console.log(this.acno);
     
  }



  pswdChange(event:any)
  {
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  login()
  {
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login successful')

      }
      else{
        alert('invalid userdetails')
      }
    }
  }



}
