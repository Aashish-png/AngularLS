import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataObj } from 'src/app/data';


@Component({
  selector: 'app-reg-data',
  templateUrl: './reg-data.component.html',
  styleUrls: ['./reg-data.component.css']
})

export class RegDataComponent implements OnInit {
  msg:string
  showData:dataObj;

  constructor(private router:Router) {
    this.showData =new dataObj();
   }

  ngOnInit(): void {
  }
//  check the local storage record and pass a new id
  getNewId(){
    debugger
    const oldData= localStorage.getItem('list')
    if(oldData!==null){
      const DataN=JSON.parse(oldData)
      return DataN.length + 1;
    }else{
      return 1;
    }
  }
  saveData(){
         //save data 
    
      const letestId= this.getNewId();
      this.showData.UserId=letestId
      const oldData= localStorage.getItem('list')
    if(oldData!==null){  
      const DataN=JSON.parse(oldData)
      DataN.push(this.showData);
      localStorage.setItem("list",JSON.stringify(DataN))
       this.msg="Data Added"
    }else{  //if empty push new data in local stroage
      const arr=[]
      arr.push(this.showData)
      localStorage.setItem("list",JSON.stringify(arr))
      this.msg="Data Added"
    }
    this.router.navigateByUrl('/show')//route to view data 
  }
 

  
  }

