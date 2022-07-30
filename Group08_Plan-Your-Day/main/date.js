var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var todayDate = String(date.getDate()).padStart(2, '0');

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthWord = "";

for(let i = 0; i < monthArr.length; i++)
{
    if (month === i + 1)
    {
        monthWord = monthArr[i];
        break;
    }
}

let datePrint = String(todayDate + " " + monthWord + " " + year);

document.getElementById("date-date").innerText = datePrint;