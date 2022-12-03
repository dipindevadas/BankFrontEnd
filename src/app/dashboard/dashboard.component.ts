import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // deposit properties
  acno="";
  pswd="";
  amount="";

  //deposite model
depositForm=this.fb.group({//group
  // uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],//array
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-z]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
}
)

  //withdrow properties

  acno1="";
  pswd1="";
  amount1="";

   //deposite model
withdrowForm=this.fb.group({//group
  // uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],//array
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-z]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
}
)




  //currentuser-login name

  user="";

  
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { 
    this.user=this.ds.currentUser;
  }


  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno'))
    {
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }

    deposit()
    {
      // alert('clicked');
      console.log(this.depositForm.valid);
      
     
      var acno=this.depositForm.value.acno;
      var pswd=this.depositForm.value.pswd;
      var amount=this.depositForm.value.amount;


      if(this.depositForm.valid)
      {
        const result=this.ds.deposit(acno,pswd,amount);
      
      
      if(result)
      {
        alert(`${amount} is credited...Available balance is ${result}`)

      }
      else{
        alert('Transaction error')
      }


    }
    else{
      alert('deposit failed')
    }
  }



    withdraw()
    {
    console.log(this.withdrowForm.valid);
    
      
      
      var acno=this.withdrowForm.value.acno1;
      var pswd=this.withdrowForm.value.pswd1;
      var amount=this.withdrowForm.value.amount1;


      if(this.withdrowForm.valid)
      {
        const result=this.ds.withdrow(acno,pswd,amount)

        if(result)
        {
          alert(`${amount} is debited...Available balance is ${result}`)
        }
        else{
          alert('Transaction error')
        // alert('clicked');
      }
    
      }
      else
      {
        alert("withdrawal failed")
      }
     
  }
  logout()
  {
    //remove username and acno
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }
  delete()
  {
    alert('clicked')
  }
}

