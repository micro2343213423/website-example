"use strict";

/* exported renderTariffs,renderFinalSelection,renderRegion,renderConsumptionEstimates,selectTariff,showHidePopup */

function renderTariffs() {
    let eleOption = document.querySelector('#electricity').checked;
    let gasOption = document.querySelector('#gas').checked;
    let elvehOption = document.querySelector('#el-veh').checked;
    let solarOption = document.querySelector('#solar').checked;
    let slider = document.querySelector('input#renewability').value;


    if (eleOption === true) {
        document.querySelector('#optElectric').style.display = "initial";
        document.querySelector('#genEle').style.display = "initial";
        document.querySelector('#medEle').style.display = "initial";
    }


    if (gasOption === true) {
        document.querySelector('#optGas').style.display = "initial";
        document.querySelector('#genGas').style.display = "initial";
        document.querySelector('#medGas').style.display = "initial";
    }

    if (elvehOption === true) {
        document.querySelector('#optElectric').style.display = "initial";
        document.querySelector('#genEle').style.display = "initial";
        document.querySelector('#medEle').style.display = "initial";

    }

    if (solarOption === true) {
        document.querySelector('#optElectric').style.display = "initial";
        document.querySelector('#genEle').style.display = "initial";
        document.querySelector('#medEle').style.display = "initial";
    }

    if (slider >= 80) {
        document.querySelector('#optElectric').style.display = "initial";
    }



}


function DisplayTarrifs(monthlycostvaluearray) {
    let calculate = calculateMonthlyPrice(monthlycostvaluearray);
    // optimal electricity
    document.querySelector('#optElectric h3').innerHTML = _tariffs[0].name;
    document.querySelector('#opt-ele-calc').innerHTML = calculate[0] + "€/month";
    document.querySelector('#titlepricePerkWh').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh').innerHTML = _tariffs[1].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage').innerHTML = _tariffs[1].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar').innerHTML = _tariffs[1].compatibility;


    // optimal gas
    document.querySelector('#optGas h3').innerHTML = _tariffs[1].name;
    document.querySelector('#op-gas-calc').innerHTML = calculate[1] + "€/month";
    document.querySelector('#titlepricePerkWh1').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh1').innerHTML = _tariffs[1].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage1').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage1').innerHTML = _tariffs[1].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith1').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar1').innerHTML = _tariffs[1].compatibility;


    // generous electrcity
    document.querySelector('#genEle h3').innerHTML = _tariffs[2].name;
    document.querySelector('#gen-ele-calc').innerHTML = calculate[2] + "€/month";
    document.querySelector('#titlepricePerkWh2').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh2').innerHTML = _tariffs[2].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage2').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage2').innerHTML = _tariffs[2].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith2').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar2').innerHTML = _tariffs[2].compatibility;


    // generous gas
    document.querySelector('#genGas h3').innerHTML = _tariffs[3].name;
    document.querySelector('#gen-gas-calc').innerHTML = calculate[3] + "€/month";
    document.querySelector('#titlepricePerkWh3').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh3').innerHTML = _tariffs[3].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage3').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage3').innerHTML = _tariffs[3].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith3').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar3').innerHTML = _tariffs[3].compatibility;


    // med electricity
    document.querySelector('#medEle h3').innerHTML = _tariffs[4].name;
    document.querySelector('#med-Ele-calc').innerHTML = calculate[4] + "€/month";
    document.querySelector('#titlepricePerkWh4').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh4').innerHTML = _tariffs[4].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage4').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage4').innerHTML = _tariffs[4].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith4').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar4').innerHTML = _tariffs[4].compatibility;


    // med gas
    document.querySelector('#medGas h3').innerHTML = _tariffs[5].name;
    document.querySelector('#med-gas-calc').innerHTML = calculate[5] + "€/month";
    document.querySelector('#titlepricePerkWh5').innerHTML = "PricePerkWh";
    document.querySelector('#priceperkwh5').innerHTML = _tariffs[5].pricePerkWh;
    document.querySelector('#titlerenewableenergyprecentage5').innerHTML = "Renewable energy percentage";
    document.querySelector('#renewabilitypercentage5').innerHTML = _tariffs[5].minimalRenewableEnergy;
    document.querySelector('#titlecompatiblewith5').innerHTML = "Compatible with"
    document.querySelector('#electric-veh-solar5').innerHTML = _tariffs[5].compatibility;

}


function renderFinalSelection(container, tariffs) {

}

function renderRegion(region) {

}

function renderConsumptionEstimates(electricalConsumption, heatconsumption) {
    let heatconst = calculateAverageHeatConsumption(heatconsumption);
    document.querySelector('.electricityEstimate').innerHTML = calculateAverageElectricityConsumption(electricalConsumption) + " kWh for electricity";
    document.querySelector('.gasEstimate').innerHTML = heatconst + " kWh Gas";

}


function selectTariff(e, select) {


}

function showHidePopup(e) {
    e.preventDefault();
    document.querySelector('.details').hidden = false;
    //let unhide = document.getElementsByClassName('details');
    // unhide.forEach(unhide => {
    //    unhide.hidden = false;
    //});
    //hidepopup();

}

function hidepopup(e) {
    e.preventDefault();
    document.querySelector('.details').hidden = true;
}


