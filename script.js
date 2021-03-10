function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    document.getElementById("result").innerText  = `
    If you deposit ${principal},
    at an interest rate of ${rate}.
    You will receive an amount of ${principal + interest},
    in the year ${years}
    `
}

function rateChange(){
    document.getElementById("rateValue").innerHTML = `${document.getElementById("rate").value} %` ;
}


