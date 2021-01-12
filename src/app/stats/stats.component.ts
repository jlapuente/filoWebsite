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
  chart: any;
  ctx: any;


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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    //   type: 'bar',
    //   data: {
    //     labels: this.labels,
    //     datasets: [{
    //       label: 'Notas',
    //       data: this.marks,
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   // options: {
    //   //   scales: {
    //   //     yAxes: [{
    //   //       ticks: {
    //   //         beginAtZero: true
    //   //       }
    //   //     }]
    //   //   }
    //   // }
    // });
    console.log(this.chart);
  }

  calculateMarks(){
    this.marks.push(1); // Javi
    this.marks.push(1); // Sofi
    this.marks.push(2); // Mario
    this.marks.push(3); // Marquina
    this.marks.push(4); // Alex
    this.marks.push(5); // Alex
    this.marks.push(5); // Claudia
    this.marks.push(5); // Carla
    this.marks.push(5); // Lara
    this.prepareGraph();
  }

  prepareLabels(){
    for (let index = 0; index <= 10; index++) {
      this.labels.push(index);
    }
    this.calculateMarks();
  }
}
