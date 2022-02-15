import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { CONSTANTS } from '../properties/constants'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ipfMarks from '../../assets/json/marks_ipf.json';
import epistemologyMarks from '../../assets/json/marks_epistemologia.json';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  constructor() { }

  labels: number[] = [];
  marks: number[] = [];

  searchList: any[] = [];

  chart: any;
  ctx: any;
  selectedGraph;

  pieOptions = {
    legend: false,
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        // formatter: function (value, context) {
        //   return context.chart.data.labels[context.dataIndex] + ': ' + value;
        // },
        clamp: true,
        anchor: 'center',
        // rotation: 90,
        position: 'outside',
      }
    }
  };

  ngOnInit() {
    this.prepareLabels();
    this.searchList.push(ipfMarks);
    this.searchList.push(epistemologyMarks);
    this.selectedGraph = ipfMarks;
    this.marks = this.selectedGraph.items;
    this.calculateMarks([], this.marks, document.getElementById('chart'), CONSTANTS.TEN_ESCALE);
  }

  updateSearch(){
    this.marks = this.selectedGraph.items;
    this.calculateMarks([], this.marks, document.getElementById('chart'), CONSTANTS.TEN_ESCALE);
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
      plugins: [ChartDataLabels],
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
    if (emptyArray.length == 0) {
      for (let index = 0; index < marks.length; index++) {
        emptyArray.push(this.getOccurrence(marks, index));
      }
      console.log("En la asignatura: " + chart.id + " hay: " + marks.length + " alumnos");
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
