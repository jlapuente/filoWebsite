import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { CONSTANTS } from '../properties/constants'
import ChartDataLabels from 'chartjs-plugin-datalabels';


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
  terms: [] = [];
  numberOfTerms: number[] = [0, 1, 2, 3];
  selectedTerm: number = 0;
  chart: any;
  ctx: any;
  selectedGraph;

  ngOnInit() {
    this.prepareLabels();
    this.searchList.push(CONSTANTS.FIRST_TERM);
    this.searchList[0].marks.sort(function (a, b) {
      return a.id - b.id || a.title.localeCompare(b.title);
    });
    this.searchList.push(CONSTANTS.SECOND_TERM); 
    this.searchList.push(CONSTANTS.SECOND_TERM); 
    this.searchList.push(CONSTANTS.SECOND_TERM); 

    console.log(this.searchList);
    console.log(this.searchList[0].marks[0]);
    this.selectedGraph = this.searchList[0].marks[0];
    this.marks = this.selectedGraph.items;

    // Declaramos el this como una variable externa para acceder desde dentro de la funcion, de lo contrario llamariamos a un supuesto this que referencia a la funcion
    var $this = this;
    var checkExist = setInterval(function () {
      if (document.getElementById('chart')) {
        clearInterval(checkExist);
        $this.calculateMarks($this.marks, CONSTANTS.TEN_ESCALE);
      }
    }, 100);
  }

  updateSearch() {
    this.marks = this.selectedGraph.items;
    this.calculateMarks(this.marks, CONSTANTS.TEN_ESCALE);
  }

  calculateMarks(marks, escale) {
    let emptyArray = [];
    if (emptyArray.length == 0) {
      for (let index = 0; index < marks.length; index++) {
        emptyArray.push(this.getOccurrence(marks, index));
      }
      console.log("En la asignatura: " + " hay: " + marks.length + " alumnos");
    }
    this.prepareGraph(emptyArray, this.labels, escale, document.getElementById('chart'));
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

  prepareGraph(values, markLabel, escale, canva) {
    var ctx = canva.getContext('2d');
    if (this.chart != undefined) {
      this.chart.destroy();
    }
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
    this.chart.update();
  }
}
