const generateChartBtn = document.querySelector("#generateChart");



generateChartBtn.onclick = function(){
    let chartName = document.getElementById("h2cname").innerText;
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: [25,35,40]
    }]
  }
});

}




