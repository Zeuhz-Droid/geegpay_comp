import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
// import chart from "../assets/imgs/table.png";

function BarChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const barChartColor = ["rgba(75, 192, 192, 0.2)"];
    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: null,
            data: [
              7000, 17000, 3000, 27000, 8000, 45000, 9000, 21000, 31500, 4000,
              30000, 26000, 50000,
            ],
            backgroundColor: (context) => {
              const index = context.dataIndex;
              if (index === 5) {
                const gradient = context.chart.ctx.createLinearGradient(
                  0,
                  0,
                  0,
                  400
                );
                gradient.addColorStop(0, "#34caa5");
                gradient.addColorStop(1, "#34caa51f");
                return gradient;
              }
              return barChartColor;
            },
            borderRadius: 30,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "#f4c70018",
              borderDash: [4, 2],
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#f4c70048",
              borderDash: [4, 2],
            },
          },
        },
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <>
      <canvas ref={chartRef} />
    </>
  );
}

export default BarChart;