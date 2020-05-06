import { Component, OnInit } from '@angular/core';
import {MemoryService} from '../service/memory.service'
import{ChartData} from './chartData'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
 };
  width = 550;
  height = 400;
   data: ChartData[]=[];
   dataForBarChart:ChartData[]=[];
   type='PieChart';
   typeBar='BarChart';
   columnNames=["Name","value"];
   
   errorMessage:string;
  constructor(private memoryService:MemoryService) { }

  ngOnInit() {
    this.getHardWareDetails();
    console.log(this.data);
  }

  public getHardWareDetails() {
    this.memoryService.getMemoryDetails()
      .subscribe(
        (response) => {                           
          console.log('response received'+response)
        
          // console.log(response);
          var t='['+response+']';
          response.forEach(element => {

            var map =([["Blocks",element._blocks],
            ["Used",element._used],
            ["Available",element._available]])
             // var mapfinal = google.visualization.arrayToDataTable(JSON.parse(map.toString()));
         //   var googleChartData = google.visualization.arrayToDataTable($.parseJSON(map));
            console.log(element._mounted);
            const chartData:ChartData={title :element._mounted,data:map ,type:this.type ,options:this.options,width:this.width,height:this.height,columnNames:this.columnNames}
            const chartDataforBAr:ChartData={title :element._mounted,data:map ,type:this.typeBar ,options:this.options,width:this.width,height:this.height,columnNames:this.columnNames}
            this.dataForBarChart.push(chartDataforBAr);
            this.data.push(chartData);
            console.log(this.data);
            console.log(this.dataForBarChart);
            
          });
          
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
        },
        )
  }

}
