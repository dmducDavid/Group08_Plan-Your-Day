function getTime(){
    let d = new Date();
    let hH = d.getHours();
    let mM = d.getMinutes();
    
    let amOrPm = hH >= 12 ? 'PM' : 'AM';
    
    if (mM > 60){
        mM = mM - 60;
        hH = hH + 1;
    }

    hH = (hH > 12) ? hH - 12 : hH;

    hH = (hH < 10) ? "0" + hH : hH;
    mM = (mM < 10) ? "0" + mM : mM;

    let stringTime1 = String(hH + ':' + mM + ' ' + amOrPm);
    document.getElementById("line-1").innerText = stringTime1;
    document.getElementById("line-1").style.fontWeight = 'bold';
    document.getElementById("line-1").style.fontSize = '17px';

    let mTemp = mM + 30;
    let hTemp = Number(hH);

    if (mTemp > 60){
        mTemp = mTemp - 60;
        hTemp = Number(hTemp + 1);
    }
    
    hTemp = (hTemp < 10) ? "0" + hTemp : hTemp;
    mTemp = (mTemp < 10) ? "0" + mTemp : mTemp;

    let stringTime2 = String(hTemp + ':' + mTemp  + ' ' + amOrPm);
    
    document.getElementById("line-2").innerText = stringTime2;
    document.getElementById("line-2").style.fontWeight = 'bold';
    document.getElementById("line-2").style.fontSize = '17px';
}

getTime();