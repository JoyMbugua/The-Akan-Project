
// declaring our variables and making them integers
 

 //the function

 function dayOfWeek (D, M, Y) {
    var Day = ""
    var cc = Math.floor(parseInt(Y/100));
    var yy = parseInt(Y) - (cc*100);
    var mm = parseInt(M)
    var dd = parseInt(D)
    

    var ans = (Math.floor(( cc / 4) - 2 * cc - 1) + ((5 * yy) / 4) + (((mm + 1) * 26) / 10) + dd) % 7

if(ans === 0) {
    Day = "Sunday"
}
else if(ans === 1) {
    Day = "Monday"
}
else if(ans === 2) {
    Day = "Tuesday"
}
else if(ans === 3) {
    Day = "Wednesday"
}
else if(ans === 4) {
    Day = "Thursday"
}
else if(ans === 5) {
    Day = "Friday"
}
else {
    Day = "Saturday"
}
return Day
}

function displayResult() {
    var result = dayOfWeek();
    document.getElementById('result').innerHTML = result;
    return false;
  }


  //if they are female
  let femaleName = ""
  if(gender === female && Day === "Sunday") {
    femaleName = "Akosua"
  } else if (gender === female && Day === "Monday") {
    femaleName = "Adwoa"
  } else if (gender === female && Day === "Tueday") {
    femaleName = "Abenaa"
} else if (gender === female && Day === "Wednesday") {
    femaleName = "Akua"
} else if (gender === female && Day === "Thursday") {
    femaleName = "Yaa"
} else if (gender === female && Day === "Friday") {
    femaleName = "Afua"
} else {
    femaleName = "Ama"
}
  //if they are male
  var maleName = ""
  if(gender === male && Day === "Sunday") {
      maleName = "Kwasi"
  } else if (gender === male && Day === "Monday") {
    maleName = "Kwadwo"
  } else if (ggender === male && Day === "Tuesday") {
    maleName = "Kwabena"
} else if (gender === male && Day === "Wednesday") {
    maleName = "Kwaku"
} else if (gender === male && Day === "Thursday") {
    maleName = "Yaw"
} else if (gender === male && Day === "Friday") {
    maleName = "Kofi"
} else {
    AkanName = "Kwame"
} 
