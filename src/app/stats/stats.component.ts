import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  labels: number[] = [];
  marks: number[] = [];
  calculatedMarks: number[] = [];
  chart: any;
  ctx: any;

  colors: string[] = [
    'rgba(84, 71, 140, 0.6)',
    'rgba(44, 105, 154, 0.6)',
    'rgba(4, 139, 168, 0.6)',
    'rgba(13, 179, 158, 0.6)',
    'rgba(22, 219, 147, 0.6)',
    'rgba(131, 227, 119, 0.6)',
    'rgba(185, 231, 105, 0.6)',
    'rgba(239, 234, 90, 0.6)',
    'rgba(241, 196, 83, 0.6)',
    'rgba(242, 158, 76, 0.6)',
    'rgba(255, 56, 100, 0.6)'
  ];
  borderColors: string[] = [
    'rgba(84, 71, 140, 1)',
    'rgba(44, 105, 154, 1)',
    'rgba(4, 139, 168, 1)',
    'rgba(13, 179, 158, 1)',
    'rgba(22, 219, 147, 1)',
    'rgba(131, 227, 119, 1)',
    'rgba(185, 231, 105, 1)',
    'rgba(239, 234, 90, 1)',
    'rgba(241, 196, 83, 1)',
    'rgba(242, 158, 76, 1)',
    'rgba(255, 56, 100, 1)'
  ];
  constructor() { }

  ngOnInit() {
    this.prepareLabels();
  }


  prepareGraph(){
    let canva:any = document.getElementById('myChart');
    var ctx = canva.getContext('2d');
    console.log(this.labels);
    console.log(this.marks);
    console.log(canva);
    console.log(ctx);
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Notas',
          data: this.calculatedMarks,
          backgroundColor: this.colors,
          borderColor: this.borderColors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    });
    console.log(this.chart);
  }

  calculateMarks(){
    this.marks.push(5); // Cristobal
    this.marks.push(7); // Angel
    this.marks.push(0); // Carlos
    this.marks.push(10); // Yolanda
    this.marks.push(0); // Carmen
    this.marks.push(0); // Lara
    this.marks.push(9); // Martin '5
    this.marks.push(2); // Fer '5
    this.marks.push(9); // Alex
    this.marks.push(6); // Sofia '25
    this.marks.push(7); // Javier '5
    this.marks.push(8); // Capi '75
    this.marks.push(9); // Jon 
    this.marks.push(4); // Paola 
    this.marks.push(8); // Mario '5
    this.marks.push(0); // Eli 
    this.marks.push(7); // Maria '5


    for (let index = 0; index < this.marks.length; index++) {
      this.calculatedMarks.push(this.getOccurrence(this.marks, index));
    }

    this.prepareGraph();
  }

  prepareLabels(){
    for (let index = 0; index <= 10; index++) {
      this.labels.push(index);
    }
    this.calculateMarks();
  }

 getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

  
}
