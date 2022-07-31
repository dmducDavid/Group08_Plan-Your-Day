function noTimeSelection()
{
    document.getElementById('timeMode').style.color = "#8A8BB3";
    document.getElementById('timeMode').style.fontWeight = "normal";
    document.getElementById('no-timeMode').style.color = "red";
    document.getElementById('no-timeMode').style.fontWeight = "bold";
    const tfs = document.getElementById('time-from-show');
    const tts = document.getElementById('time-to-show');

    document.getElementById('line-1').innerHTML = `<p id = "start-now" class = "startNow">START NOW</p>`;
    document.getElementById('line-2').innerHTML = `<p id = "start-at" class = "startAt">START AT</p>`;
    tfs.style.display = "none";
    tts.style.display = "none";
}