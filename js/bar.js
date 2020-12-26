const generateChartBtn = document.querySelector("#generateBarChart");

generateChartBtn.onclick = function(){

	let inputChartName2 = document.getElementById("cname").value;
    document.getElementById("cname3").innerText = inputChartName2;

	let values = [];
    values[0] = document.getElementById("lbname1").value;
    values[1] = document.getElementById("lbname2").value;
    values[2] = document.getElementById("lbname3").value;

    let labels = [];
    labels[0] = document.getElementById("barr0").value;
    labels[1] = document.getElementById("barr1").value;
	labels[2] = document.getElementById("barr2").value;
	
	
	var ctx = document.getElementById("myChart").getContext('2d');
	var barChart = new Chart(ctx, {
		type: 'bar',
		data: {
		  labels: labels,
		  datasets: [
			{
			  label: "",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
			  data: values
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: ''
		  }
		},
		
	});
}


