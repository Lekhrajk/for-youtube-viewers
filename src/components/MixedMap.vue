<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      showTooltips: true,  
       type: Object,   
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const dates   = this.chartData.map(d => d.date).slice(-40);
    const active  = this.chartData.map(d => d.active).slice(-40);
    const recover = this.chartData.map(d => d.recover).slice(-40);
    const deaths  = this.chartData.map(d => d.deaths).slice(-40);
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      pointHoverBackgroundColor,
      
    } = this.chartColors;
    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: "Daily Analysis : Active",
            DrawOnChartArea:false,
            data: active,
            fill:false,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            pointHoverBackgroundColor: pointHoverBackgroundColor,
            order:1
          },
          {
            label: "Daily Analysis : Recover",
            data:  recover,
            DrawOnChartArea:false,
            fill:false,
            borderColor: "#196F3D",
            pointBorderColor: "#196F3D",
            pointBackgroundColor: "#28B463",
            pointHoverBackgroundColor: "#fff",
            order:2
          },
          {
            label: "Daily Analysis : Deaths",
            data:  deaths,
            fill: false,
            borderColor: "#000",
            pointBorderColor: "#000",
            pointBackgroundColor: "#2C3E50",
            pointHoverBackgroundColor: "#fff",
            order:3    
          }
        ],
      },
    this.options,
    );
  }
};
</script>