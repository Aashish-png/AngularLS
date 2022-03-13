import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataObj } from 'src/app/data';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  
    msg:string
    showData:dataObj;
    constructor(private route:ActivatedRoute, private router:Router) {
      this.showData =new dataObj();
      debugger
      this.route.params.subscribe((res)=>{

        this.showData.UserId=res['id'] //get the id 
      })
     }
  
    ngOnInit(): void {
      debugger
      const oldData= localStorage.getItem('list')
      if(oldData!==null){
        const DataN=JSON.parse(oldData)
        const curruntUser=DataN.find((m:any)=> m.UserId==this.showData.UserId)
        if(curruntUser!==undefined){
          this.showData.Uname=curruntUser.Uname
          this.showData.email=curruntUser.email
          this.showData.mobile=curruntUser.mobile
          this.showData.city=curruntUser.city
          

        }
    }
  }
    //update the data 
    updateUser(){
      const oldData= localStorage.getItem('list')
      if(oldData!==null){
        const DataN=JSON.parse(oldData)
        DataN.splice(DataN.findIndex((a:any)=>a.UserId==this.showData.UserId),1);//delete the old data and set new data
        DataN.push(this.showData);
        localStorage.setItem("list",JSON.stringify(DataN))
         this.msg="Data Updated"
      }
      this.router.navigateByUrl('/show')
    }
  
  }
  