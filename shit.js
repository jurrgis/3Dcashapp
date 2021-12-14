

$('.logika').on('submit', (e) => {
    e.preventDefault();
    //part
    let printTime = document.querySelector("[name='hours']").value;
    let partWeight = document.querySelector("[name='weight']").value;
    let quality = document.querySelector("[name='quality']:checked").value;


    //operator
    let filamentCost = document.querySelector("[name='filament_cost']").value;
    let printerRate = document.querySelector("[name='printer_rate']").value;
    let electricityCost = document.querySelector("[name='electricity_cost']").value;
    let operatorFee = document.querySelector("[name='operator_fee']").value;

    //convert quality to time variable and adjust print time input
    
    let newPrintTime;

    if (quality == "draft"){
        newPrintTime = printTime*1;
    } else if (quality == "medium"){
        newPrintTime = printTime*1.5;
    } else if (quality == "maximum"){
        newPrintTime = printTime*2;
    } else {
        newPrintTime = printTime;
    }
    
    //dothemaths

    let step1 = filamentCost*partWeight;
    let step2 = printerRate*newPrintTime;
    let step3 = electricityCost*newPrintTime;

    let finalCost = step1 + step2 + step3 + Number(operatorFee);
    let equalize = Math.ceil(finalCost);

    //output to html
    console.log("nesigilink")
    $(".output").html("€" + equalize);

    return false;
    
});
