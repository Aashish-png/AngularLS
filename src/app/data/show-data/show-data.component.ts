import { Component, OnInit } from '@angular/core';
import { dataObj } from 'src/app/data';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  dataSource: any
  showData:dataObj[];
  constructor() {
    this.showData=[];
   }

  ngOnInit(): void {
    debugger
    const records =localStorage.getItem("list")
    if(records!==null){
      this.showData=JSON.parse(records)
    }
  }
  //delete the data 
  DeleteData(id:any){
    const oldData= localStorage.getItem('list')
      if(oldData!==null){
        const DataN=JSON.parse(oldData)
        DataN.splice(DataN.findIndex((a:any)=>a.UserId==id),1);
        localStorage.setItem("list",JSON.stringify(DataN))
         
         const records =localStorage.getItem("list")
    if(records!==null){
      this.showData=JSON.parse(records)
    }
  }


}
}
