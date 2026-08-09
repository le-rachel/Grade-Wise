var classes = [document.getElementById("c1s1")];

var classNum = 2;

function addClassInput() {
  //class label
  var label = document.createElement("LABEL");
  var text = document.createTextNode("Class " + classNum.toString() + ": ");
  label.appendChild(text);
  document.getElementById("classes").appendChild(label);
  //semester 1 
  var sem1Label = document.createElement("LABEL");
  var sem1Text = document.createTextNode("Semester 1: ");
  sem1Label.setAttribute("for", "c" + classNum.toString() + "s1");
  sem1Label.appendChild(sem1Text);
  document.getElementById("classes").appendChild(sem1Label);
  var sem1Input = document.createElement("INPUT");
  sem1Input.setAttribute("type", "number");
  sem1Input.setAttribute("id", "c" + classNum.toString() + "s1");
  sem1Input.setAttribute("name", "c" + classNum.toString() + "s1");
  document.getElementById("classes").appendChild(sem1Input);
  classes.push(sem1Input);
  //semester 2
  var sem2Label = document.createElement("LABEL");
  var sem2Text = document.createTextNode(" Semester 2: ");
  sem2Label.setAttribute("for", "c" + classNum.toString() + "s2");
  sem2Label.appendChild(sem2Text);
  document.getElementById("classes").appendChild(sem2Label);
  var sem2Input = document.createElement("INPUT");
  sem2Input.setAttribute("type", "number");
  sem2Input.setAttribute("id", "c" + classNum.toString() + "s2");
  sem2Input.setAttribute("name", "c" + classNum.toString() + "s2");
  document.getElementById("classes").appendChild(sem2Input);
  //class type
  var typeLabel = document.createElement("LABEL");
  var typeText = document.createTextNode(" Type of Class: ");
  typeLabel.setAttribute("for", "c" + classNum.toString() + "type");
  typeLabel.appendChild(typeText);
  document.getElementById("classes").appendChild(typeLabel);
  var select = document.createElement("SELECT");
  select.setAttribute("id", "c" + classNum.toString() + "type");
  select.setAttribute("name", "c" + classNum.toString() + "type");
  var academic = document.createElement("option");
  academic.setAttribute("value", "academic");
  var academicText = document.createTextNode("Academic");
  academic.appendChild(academicText);
  select.appendChild(academic);
  var preap = document.createElement("option");
  preap.setAttribute("value", "preap");
  var preapText = document.createTextNode("Pre-AP");
  preap.appendChild(preapText);
  select.appendChild(preap);
  var ap = document.createElement("option");
  ap.setAttribute("value", "ap");
  var apText = document.createTextNode("AP/Dual/OnRamps");
  ap.appendChild(apText);
  select.appendChild(ap);
  document.getElementById("classes").appendChild(select);
  //br element
  var span = document.createElement("SPAN");
  var br = document.createElement("br");
  span.appendChild(br);
  document.getElementById("classes").appendChild(span);
  classNum++;
}

var gpa = document.getElementById("gpa");
var submitGPA = document.getElementById("submitGPA");

submitGPA.addEventListener("click", calculateGPA);

function calculateGPA() {
  var academic = [];
  var preap = [];
  var ap = [];
  var all = [];
  var credits = 0;
  for (let i = 1; i <= classes.length; i++) {
    var sem1 = Number(document.getElementById("c" + i.toString() + "s1").value);
    var sem2 = Number(document.getElementById("c" + i.toString() + "s2").value);
    if (sem1 != 0) {
      credits += 0.5;
    }
    if (sem2 != 0) {
      credits += 0.5;
    }
    var type = document.getElementById("c" + i.toString() + "type").value;
    if (type == "academic") {
      if (sem1 != 0) {
        academic.push(sem1);
        all.push(sem1);
      }
      if (sem2 != 0) {
        academic.push(sem2);
        all.push(sem2);
      }
    }
    else if(type == "preap") {
      if (sem1 != 0) {
        preap.push(sem1);
        all.push(sem1);
      }
      if (sem2 != 0) {
        preap.push(sem2);
        all.push(sem2);
      }
    }
    else {
      if (sem1 != 0) {
        ap.push(sem1);
        all.push(sem1);
      }
      if (sem2 != 0) {
        ap.push(sem2);
        all.push(sem2);
      }
    }
  }
  var GPA;
  if (document.getElementById("unweighted").checked) {
    var total = 0;
    for (let i = 0; i < all.length; i++) {
      var num = all[i];
      if (num <= 100 && num >= 90) {
        total += 4.0;
      }
      else if (num <= 89 && num >= 80) {
        total += 3.0;
      }
      else if (num <= 79 && num >= 70) {
        total += 2.0;
      }
      else if (num <= 69 && num >= 60) {
        total += 1.0;
      }
      else if (num < 60) {
        total += 0.0;
      }
    }
    GPA = total / (credits*2);
  }
  else if (document.getElementById("weighted").checked) {
    var total = 0;
    for (let i = 0; i < ap.length; i++) {
      var num = ap[i];
      if (num <= 100 && num >= 90) {
        total += 5.0;
      }
      else if (num <= 89 && num >= 80) {
        total += 4.0;
      }
      else if (num <= 79 && num >= 70) {
        total += 3.0;
      }
      else if (num <= 69 && num >= 60) {
        total += 2.0;
      }
      else if (num < 60) {
        total += 0.0;
      }
    }
    for (let i = 0; i < preap.length; i++) {
      var num = preap[i];
      if (num <= 100 && num >= 90) {
        total += 4.5;
      }
      else if (num <= 89 && num >= 80) {
        total += 3.5;
      }
      else if (num <= 79 && num >= 70) {
        total += 2.5;
      }
      else if (num <= 69 && num >= 60) {
        total += 1.5;
      }
      else if (num < 60) {
        total += 0.0;
      }
    }
    for (let i = 0; i < academic.length; i++) {
      var num = academic[i];
      if (num <= 100 && num >= 90) {
        total += 4.0;
      }
      else if (num <= 89 && num >= 80) {
        total += 3.0;
      }
      else if (num <= 79 && num >= 70) {
        total += 2.0;
      }
      else if (num <= 69 && num >= 60) {
        total += 1.0;
      }
      else if (num < 60) {
        total += 0.0;
      }
    }
    GPA = total / (credits*2);
  }
  else {
    var total = 0;
    for (let i = 0; i < ap.length; i++) {
      total += ap[i] * 1.3;
    }
    for (let i = 0; i < preap.length; i++) {
      total += preap[i] * 1.2;
    }
    for (let i = 0; i < academic.length; i++) {
      total += academic[i] * 1.1;
    }
    GPA = total / (credits*2);
  }
  gpa.innerHTML = parseFloat(GPA).toFixed(4);
}