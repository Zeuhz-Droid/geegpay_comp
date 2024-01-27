import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function BarChart({ period }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  let labels, data, maxIndex;

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function getNumbers(length) {
    const numbersArray = Array.from(
      { length },
      () => getRandomNumber(5, 50) * 1000
    );
    const maxValue = Math.max(...numbersArray);
    maxIndex = numbersArray.indexOf(maxValue);
    return numbersArray;
  }

  if (period === "daily") {
    labels = [
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
    ];
    data = getNumbers(21);
  }
  if (period === "weekly") {
    labels = [
      "week1",
      "week2",
      "week3",
      "week4",
      "week5",
      "week6",
      "week7",
      "week8",
      "week9",
      "week9",
      "week10",
      "week11",
      "week13",
      "week14",
      "week15",
      "week16",
    ];
    data = getNumbers(16);
  }
  if (period === "monthly") {
    labels = [
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
    ];
    data = [
      7500, 17000, 6000, 27000, 8000, 45000, 9000, 21000, 31000, 7000, 30000,
      26000, 50000,
    ];
  }

  // Custom animation plugin
  const dancingAnimation = {
    id: "dancingAnimation",
    beforeDraw(chart) {
      const { ctx, chartArea } = chart;
      const animationProgress =
        chart.options.animation.currentStep / chart.options.animation.numSteps;

      const offset = chartArea.width * animationProgress;
      ctx.translate(offset, 0);
    },
  };

  Chart.register(dancingAnimation);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const barChartColor = ["rgba(75, 192, 192, 0.2)"];
    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: null,
            data: data,
            hoverBackgroundColor: ["#66c87b6f"],
            backgroundColor: (context) => {
              const index = context.dataIndex;
              if (index === (maxIndex || 5)) {
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
            borderRadius: 100,
          },
        ],
      },
      options: {
        animation: {
          duration: 1000,
          easing: "easeInOutQuart",
        },
        dancingAnimation: {},
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
            ticks: {
              callback: (value) => `$${value.toLocaleString()}`,
              stepSize: 10000,
              max: 50000,
              min: 5000,
            },
          },
        },
        responsive: true,
        aspectRatio: 2,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            yAlign: "bottom",
            titleColor: "none",
            caretSize: 4,
            callbacks: {
              label: (context) => {
                const value = context.parsed.y || 0;
                return `$${Math.floor(value).toLocaleString()}`;
              },
              title: () => "",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, maxIndex]);
  return (
    <>
      <canvas ref={chartRef} />
    </>
  );
}

export default BarChart;
