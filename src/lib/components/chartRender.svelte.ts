import { Chart } from "chart.js";


export const chartRender = (id : string, options : any) : any => {
    let _node = document.getElementById(id) as HTMLCanvasElement
    let _chart = $state(new Chart(_node, options));
    
    return {
        updateOptions(updateOptions : any) {
            _chart.data = updateOptions
            this.updateDraw()
        },
        destroy() {
        },
        updateDraw() {
            _chart.update()
        }
    }
}