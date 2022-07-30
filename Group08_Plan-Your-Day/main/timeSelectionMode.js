function timeSelection(){
    let d = new Date();
    let hH = d.getHours();
    let mM = d.getMinutes();
    
    if (mM > 60){
        mM = mM - 60;
        hH = hH + 1;
    }

    hH = (hH < 10) ? "0" + hH : hH;
    mM = (mM < 10) ? "0" + mM : mM;

    let stringTime1 = String(hH + ':' + mM);

    let mTemp = Number(mM) + 30;
    let hTemp = Number(hH);

    if (mTemp > 60){
        mTemp = Number(mTemp - 60);
        hTemp = Number(hTemp + 1);
    }
    
    hTemp = (hTemp < 10) ? "0" + hTemp : hTemp;
    mTemp = (mTemp < 10) ? "0" + mTemp : mTemp;

    let stringTime2 = String(hTemp + ':' + mTemp);
    
    document.getElementById('line-1').innerHTML = `<input type = "time" id = "time-from-show" class = "timeFromShow" value = ${stringTime1}>`;
    document.getElementById('line-2').innerHTML = `<input type = "time" id = "time-to-show" class = "timeToShow" value = ${stringTime2}>`;
    
}


