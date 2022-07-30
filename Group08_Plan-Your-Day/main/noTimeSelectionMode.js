function noTimeSelection(){
    document.getElementById('line-1').innerHTML = `<p id = "start-now" class = "startNow">START NOW</p>`;
    document.getElementById('line-2').innerHTML = `<p id = "start-at" class = "startAt">START AT</p>`;
    document.getElementById('time-from-show').style.display = "none";
    document.getElementById('time-to-show').style.display = "none";
}