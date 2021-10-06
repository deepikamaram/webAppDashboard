const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      borderColor: "rgb(134, 133, 226)",
      borderWidth: 1,
      fill: {
        target: "origin",
        below: "rgba(192, 191, 235, 0.534)",
        above: "rgba(192, 191, 235, 0.534)",
      },
      data: [0, 10, 5, 2, 20, 30, 45, 0, 8, 45, 3, 2, 1],
      pointStyle: "circle",
      pointRadius: 4,
      pointBackgroundColor: "rgb(255,255,255)",
      pointBorderWidth: 1.5,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

var myChart = new Chart(document.getElementById("myChart"), config);
