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
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const dates = this.chartData.map(d => d.date).reverse().slice(-60);
    const totals = this.chartData.map(d => d.total).reverse().slice(-60);
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor,
      pointHoverBackgroundColor,
      
    } = this.chartColors;
    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            fill: true,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
            pointHoverBackgroundColor: pointHoverBackgroundColor
          }
        ]
      },
      this.options
    );
  }
};
</script>