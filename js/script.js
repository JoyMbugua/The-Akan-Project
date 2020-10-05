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
}