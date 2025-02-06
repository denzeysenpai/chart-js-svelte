import { Chart, type ChartConfiguration } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
let barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

export 
  function newConfig(
    Data:any
  ): ChartConfiguration {
    let xVals = [];
      let yVals = [];
      for (let i = 0; i < Data.data.length; i++) {
        xVals.push(Data.data[i].label);
        yVals.push(Data.data[i].value);
        console.log(Data.data[i].value);
      }
    return {
      type: "pie",
      data: {
        labels: xVals,
        datasets: [
          {
            backgroundColor: barColors,
            data: yVals,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: Data.title,
          },
          tooltip: {
            backgroundColor: "white",
            bodyColor: "black",
            titleColor: "black",
          },
          datalabels: {
            formatter: (value, context) => {
              //   let percentage =
              //     (
              //       (value /
              //         context.chart._metasets[context.datasetIndex].total) *
              //       100
              //     ).toFixed(2) + "%";
              return value;
            },
            color: "#fff",
            font: {
              size: 14,
            },
            opacity: 0.9,
            align: "end",
            padding: 30,
          },
        },
      },
      plugins: [ChartDataLabels],
    };
  }

const render = () : any => {
    let _node :any = undefined
    let _chart : any = undefined
    let _id : any = $state()

    return {
        initialize(id : string, options : any) {
            _node = document.getElementById(id) as HTMLCanvasElement
            _chart = new Chart(_node, options);
            _id = id
            this.updateDraw()
        },
        updateOptions(updateData : any) {
            if(this.isValid()) {
                _chart.destroy()
                this.initialize(_id,newConfig(updateData))
                this.updateDraw()
            }
        },
        destroy() {
        },
        updateDraw() {
            if(this.isValid()) {
                _chart.update()
            }
        },
        get Chart() {
             if(this.isValid()) {
                return _chart
            }
        },
        isValid() {
            return (_node != undefined && _chart != undefined)
        }
    }
}

export const chartRender = render()