var grade = document.getElementById("grade");
var submitAssignment = document.getElementById("submitAssignment");

submitAssignment.addEventListener("click", calculateScore);

function calculateScore() {
  var numCorrect = document.getElementById("numCorrect").value;
  var totalQuestions = document.getElementById("totalQuestions").value;
  var squareRoot = document.getElementById("squareRoot");
  var halfPoints = document.getElementById("halfPoints");
  var extraPoints = document.getElementById("extraPoints").value;
  var score = (numCorrect / totalQuestions) * 100;
  if (halfPoints.checked) {
    var extra = 100 - score;
    score += (extra / 2);
  }
  if (squareRoot.checked) {
    score = Math.sqrt(score);
    score *= 10;
  }
  if (extraPoints != 0) {
    score += Number(extraPoints);
  }
  grade.innerHTML = parseFloat(score).toFixed(2);
}
