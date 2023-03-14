"use strict";

/* exported calculateAverageElectricityConsumption,calculateAverageHeatConsumption,getInsulationPenalty,getResidentialBonus */

function translateSelectionToNmbrs() {
    let apartmentnbmr = _config.heatConsumption.neighbourInsulationModifiers.apartment;
    let semidetachednbmr = _config.heatConsumption.neighbourInsulationModifiers.semiDetached;
    let detachednbmr = _config.heatConsumption.neighbourInsulationModifiers.detachedHouse;
    let terracednbmr = _config.heatConsumption.neighbourInsulationModifiers.terracedHouse;
    let inputproperty = [apartmentnbmr, semidetachednbmr, detachednbmr, terracednbmr];
    if (document.querySelector('input[name="propertytype"]:checked').value === "apartment") {
        inputproperty = apartmentnbmr;
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "semi-detached") {
        inputproperty = semidetachednbmr;
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "terrraced") {
        inputproperty = terracednbmr;
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "detached") {
        inputproperty = detachednbmr;
    }
    console.log(document.querySelector('input[name="propertytype"]:checked').value);
    return (inputproperty);
}
function getResidentialBonus() {

    let apartmentres = _config.heatConsumption.residenceTypeModifiers.apartment;
    let semidetachedres = _config.heatConsumption.residenceTypeModifiers.semiDetached;
    let detachedres = _config.heatConsumption.residenceTypeModifiers.detachedHouse;
    let terracedres = _config.heatConsumption.residenceTypeModifiers.terracedHouse;
    let bonus = [apartmentres, semidetachedres, detachedres, terracedres];
    let bonusvalue = null;

    if (document.querySelector('input[name="propertytype"]:checked').value === "apartment") {
        bonusvalue = bonus[0];
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "semi-detached") {
        bonusvalue = bonus[1];
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "terrraced") {
        bonusvalue = bonus[3];
    }
    if (document.querySelector('input[name="propertytype"]:checked').value === "detached") {
        bonusvalue = bonus[2];
    }
    return bonusvalue;
}

function calculateAverageElectricityConsumption() {
    let electricalConsumption = (_config.electricalConsumption.baseConsumption +
        _config.electricalConsumption.regressiveConsumption * Math.log(overallUserInfo.pplInHouse)).toFixed(0);
    return electricalConsumption
}

function getInsulationPenalty(inputproperty) {
    let noInsulationPenalty = _config.heatConsumption.noInsulationPenalty - translateSelectionToNmbrs(inputproperty);
    console.log(translateSelectionToNmbrs);
    return noInsulationPenalty;


}

function calculateAverageHeatConsumption( bonusvalue, inputproperty, noInsulationPenalty) {
    let peopleInHousehold = document.querySelector('#ppl-In-House').value;
    let heatConsumption = (_config.heatConsumption.basicHeatConsumptionDetachedHouse - getResidentialBonus(bonusvalue)
        + translateSelectionToNmbrs(inputproperty) + getInsulationPenalty(noInsulationPenalty) +
        _config.heatConsumption.personalConsumptionFactor * Math.log(peopleInHousehold)).toFixed(2);
    console.log(getInsulationPenalty(noInsulationPenalty))
    return heatConsumption


}

