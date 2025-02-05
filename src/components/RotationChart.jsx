// src/components/RotationChart.jsx
import { onMount, createSignal } from "solid-js";
import Chart from "chart.js/auto";

const RotationChart = (props) => {
  let canvasRef;
  const [chart, setChart] = createSignal(null);

  onMount(() => {
    if (canvasRef) {
      if (chart()) {
        chart().destroy();
      }

      const newChart = new Chart(canvasRef, {
        type: "bar",
        data: {
          labels: props.labels,
          datasets: [
            {
              label: "Minutos Jugados",
              data: props.data,
              backgroundColor: "rgba(45, 212, 191, 0.5)",
              borderColor: "rgba(45, 212, 191, 1)",
              borderWidth: 2,
              borderRadius: 8,
              hoverBackgroundColor: "rgba(45, 212, 191, 0.7)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "#e2e8f0",
                font: {
                  family: "'Poppins', sans-serif",
                  size: 14,
                },
              },
            },
            tooltip: {
              backgroundColor: "rgba(17, 24, 39, 0.9)",
              titleFont: {
                family: "'Poppins', sans-serif",
                size: 14,
              },
              bodyFont: {
                family: "'Poppins', sans-serif",
                size: 13,
              },
              padding: 12,
              cornerRadius: 8,
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(148, 163, 184, 0.1)",
              },
              ticks: {
                color: "#e2e8f0",
                font: {
                  family: "'Poppins', sans-serif",
                },
              },
            },
            y: {
              grid: {
                color: "rgba(148, 163, 184, 0.1)",
              },
              ticks: {
                color: "#e2e8f0",
                font: {
                  family: "'Poppins', sans-serif",
                },
              },
            },
          },
          animation: {
            duration: 1000,
            easing: "easeInOutQuart",
          },
        },
      });

      setChart(newChart);
    }
  });

  return (
    <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <h3 class="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
        {props.title || "Estadísticas de Juego"}
      </h3>
      <div class="w-full h-[300px] md:h-[400px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default RotationChart;
