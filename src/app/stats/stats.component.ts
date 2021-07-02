import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { CONSTANTS } from '../properties/constants'
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  calculatedAntropologyMarks: number[] = [];
  calculatedEpistemologyMarks: number[] = [];
  calculatedFeminismMarks: number[] = [];
  calculatedCultureMarks: number[] = [];
  calculatedImagenMarks: number[] = [];
  calculatedCitizenshipMarks: number[] = [];
  calculatedEthicsMarks: number[] = [];
  arrayOfMarks: any[] = [];
  arrayOfClasses: string[] = [];

  arrayOfPassed: number[] = [];
  arrayOfFailed: number[] = [];

  chart: any;
  ctx: any;

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

constructor() { }

ngOnInit() {
  this.prepareLabels();
  var $this = this;
  var checkExist = setInterval(function () {
    if (document.getElementById('politicsChart')) {
      clearInterval(checkExist);
      $this.cargarTrimestre(0);
    }
  }, 100);
  this.arrayOfMarks.push(CONSTANTS.POLITICS_MARKS);
  this.arrayOfMarks.push(CONSTANTS.ANTROPOLOGY_MARKS);
  this.arrayOfMarks.push(CONSTANTS.EPISTEMOLOGY_MARKS);
  this.arrayOfMarks.push(CONSTANTS.LOGIC_MARKS);
  this.arrayOfMarks.push(CONSTANTS.IPF_MARKS);

  this.arrayOfMarks.push(CONSTANTS.ETHICS_MARKS);
  this.arrayOfMarks.push(CONSTANTS.IMAGEN_MARKS);
  this.arrayOfMarks.push(CONSTANTS.FEMINISM_MARKS);
  this.arrayOfMarks.push(CONSTANTS.CITIZENSHIP_MARKS);
  this.arrayOfMarks.push(CONSTANTS.CULTURE_MARKS);

  this.arrayOfClasses.push('Política', 'Antropología Filosófica', 'Epistemología de las ciencias humanas', 'Introducción a la lógica', 'Introducción a los problemas filosóficos', 'Teorías Éticas', 'Filosofía de la Imagen', 'Pensamiento Feminista', 'Filosofía de la Ciudadania', 'Filosofía de la Cultura');
  this.calculatePassedExams();
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

preparePieChart(canva, dataset){
  var ctx = canva.getContext('2d');
  this.chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: this.arrayOfClasses,
      datasets: [{
        label: 'Notas',
        data: dataset,
        backgroundColor: CONSTANTS.COLORS,
        borderColor: CONSTANTS.BORDER_COLORS,
        borderWidth: 1
      }]
    },
    plugins: [ChartDataLabels],
    options: this.pieOptions
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

calculatePassedExams(){
  console.log(this.arrayOfMarks);
  this.arrayOfMarks.forEach((item, index) => {
    let passed = 0;
    let failed = 0;
    item.forEach(element => {
      if (element >= 5) {
        passed += 1;
      } else {
        failed += 1;
      }
    });
    this.arrayOfPassed.push(passed);
    this.arrayOfFailed.push(failed);
  });
  console.log(this.arrayOfFailed);
  console.log(this.arrayOfPassed);
  console.log(this.arrayOfClasses);
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

cargarTrimestre(index) {
  switch (index) {
    case 0:
      this.calculateMarks(this.calculatedPoliticsMarks, CONSTANTS.POLITICS_MARKS, document.getElementById('politicsChart'), CONSTANTS.TEN_ESCALE);
      this.calculateMarks(this.calculatedIPFMarks, CONSTANTS.IPF_MARKS, document.getElementById('ipfChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedLogicMarks, CONSTANTS.LOGIC_MARKS, document.getElementById('logicChart'), CONSTANTS.SINGLE_ESCALE);
      this.calculateMarks(this.calculatedAntropologyMarks, CONSTANTS.ANTROPOLOGY_MARKS, document.getElementById('antropologyChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedEpistemologyMarks, CONSTANTS.EPISTEMOLOGY_MARKS, document.getElementById('epistemologyChart'), CONSTANTS.FIVE_ESCALE);
      break;
    case 1:
      this.calculateMarks(this.calculatedFeminismMarks, CONSTANTS.FEMINISM_MARKS, document.getElementById('feminismChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedCultureMarks, CONSTANTS.CULTURE_MARKS, document.getElementById('cultureChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedCitizenshipMarks, CONSTANTS.CITIZENSHIP_MARKS, document.getElementById('citizenshipChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedImagenMarks, CONSTANTS.IMAGEN_MARKS, document.getElementById('imagenChart'), CONSTANTS.FIVE_ESCALE);
      this.calculateMarks(this.calculatedEthicsMarks, CONSTANTS.ETHICS_MARKS, document.getElementById('ethicsChart'), CONSTANTS.FIVE_ESCALE);
      break;
    case 2:
      this.preparePieChart(document.getElementById('failedChart'), this.arrayOfFailed);
      this.preparePieChart(document.getElementById('passedChart'), this.arrayOfPassed);
      break;
  }
}

}
