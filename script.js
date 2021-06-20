
function compute()
{
    var principal = document.getElementById('principal').value;
    if (isNaN(parseInt(principal)) || parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById('principal').focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = Number(document.getElementById("years").value);
    var totalYears = Number(new Date().getFullYear()) + years;
    var interest = principal * years * rate / 100;


    document.getElementById("result").innerText  = `
    If you deposit ${principal},
    at an interest rate of ${rate}.
    You will receive an amount of ${interest},
    in the year ${totalYears}
    `
}

function rateChange(){
    var rate = document.getElementById("rate").value;
    document.getElementById("rateChange").innerHTML = `${document.getElementById("rate").value} %` ;
}


