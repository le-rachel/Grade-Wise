var semesterAverage = document.getElementById("semesterAverage");
var submitSemester = document.getElementById("submitSemester");

submitSemester.addEventListener("click", calculateSemester);

function calculateSemester() {
  var average1 = Number(document.getElementById("average1").value);
  var average2 = Number(document.getElementById("average2").value);
  var average3 = Number(document.getElementById("average3").value);
  var final = Number(document.getElementById("final").value);
  if (final == -1){
    var total = average1+average2+average3;
    var average = total / 3;
  }
  else {
    var average = average1*0.2666 + average2*0.2667 + average3*0.2667 + final*0.20;
  }
  semesterAverage.innerHTML = parseFloat(average).toFixed(2);
}
