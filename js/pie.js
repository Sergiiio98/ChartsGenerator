const generateChartBtn = document.querySelector("#generateChart");



generateChartBtn.onclick = function(){
    let inputChartName = document.getElementById("cname").value;
    document.getElementById("h2cname").innerText = inputChartName;
    
    let values = [];
    values[0] = document.getElementById("lname1").value;
    values[1] = document.getElementById("lname2").value;
    values[2] = document.getElementById("lname3").value;

    let labels = [];
    labels[0] = document.getElementById("arr0").value;
    labels[1] = document.getElementById("arr1").value;
    labels[2] = document.getElementById("arr2").value;
    

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: values
    }]
  }
});



}

