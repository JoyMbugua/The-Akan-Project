function dayOfWeek (d, m, y) {
    let Day = ""
    let d = parseInt(document.getElementById('day').value);
    let m = parseInt(document.getElementById('month').value);
    let y = parseInt(document.getElementById('year').value);
    let cc = Math.floor(y/100);
    let yy = parseInt(y) - (cc*100);
    let mm = parseInt(m)
    let dd = parseInt(d)

    let theDay = (Math.floor(( cc / 4) - 2 * cc - 1) + ((5 * yy) / 4) + (((mm + 1) * 26) / 10) + dd) % 7
     //0-6

     if(theDay === 0) {
        Day = "Sunday"
    }
     else if(theDay === 1) {
        Day = "Monday"
     }
     else if(theDay=== 2) {
        Day = "Tuesday"
     }
     else if(theDay === 3) {
        Day = "Wednesday"
     }
     else if(theDay === 4) {
        Day = "Thursday"
     }
     else if(theDay === 5) {
        Day = "Friday"
     }
     else if(theDay === 6) {
        Day = "Saturday"
    }
     else {
        alert('seems something is wrong!') 
     }
}

function AkanName() {
    var gender = document.querySelector(input[name="gender"],checked).value
    
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