import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { CONSTANTS } from '../properties/constants'


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  labels: number[] = [];
  marks: number[] = [];
  calculatedLogicMarks: number[] = [];
  calculatedPoliticsMarks: number[] = [];
  calculatedIPFMarks: number[] = [];
  chart: any;
  ctx: any;

  

  constructor() { }

  ngOnInit() {
    this.prepareLabels();
    this.calculateMarks(this.calculatedPoliticsMarks, CONSTANTS.POLITICS_MARKS, document.getElementById('politicsChart'), CONSTANTS.TEN_ESCALE);
    this.calculateMarks(this.calculatedIPFMarks, CONSTANTS.IPF_MARKS, document.getElementById('ipfChart'), CONSTANTS.SINGLE_ESCALE);
    this.calculateMarks(this.calculatedLogicMarks, CONSTANTS.LOGIC_MARKS, document.getElementById('logicChart'), CONSTANTS.SINGLE_ESCALE);
  }


  prepareGraph(values, markLabel, canva, escale) {
    var ctx = canva.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: markLabel,
        datasets: [{
          label: 'Notas',
          data: values,
          backgroundColor: CONSTANTS.COLORS,
          borderColor: CONSTANTS.BORDER_COLORS,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: escale
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  calculateMarks(emptyArray, marks, chart, escale) {
    for (let index = 0; index < marks.length; index++) {
      emptyArray.push(this.getOccurrence(marks, index));
    }
    this.prepareGraph(emptyArray, this.labels, chart, escale);

  }

  prepareLabels() {
    for (let index = 0; index <= 10; index++) {
      this.labels.push(index);
    }
  }

  getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  }
}
