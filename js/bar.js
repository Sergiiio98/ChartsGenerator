var ctx = document.getElementById("myChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Monday'],
			datasets: [{
				label: 'Written Works',
				backgroundColor: "red",
				borderColor: "red",
				data: [15,10,21,14,12],
				fill: false,
			}, {
				label: 'Performance Tasks',
				fill: false,
				backgroundColor: "blue",
				borderColor: "blue",
				data: [17,15,27,14,15],
			}, {
				label: 'Quarterly Assessment',
				fill: false,
				backgroundColor: "green",
				borderColor: "green",
				data: [8,10,6,11,9],
			}],
  }
});