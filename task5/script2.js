const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        borderColor: "#2196f3",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };
  
  const config = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Статистика продажів за останній місяць",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  const ctx = document.getElementById("sales-chart").getContext("2d");
  const salesChart = new Chart(ctx, config);
  