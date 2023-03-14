"use strict";
let sortingList = [('#highElectric'), ('#highGas'), ('okElectric'), ('#okGas')];

/* exported navigate,displayRenewabilityPercentage,getGeneralInformation,calculateOptimalTariff */

function navigate(e) {
    document.querySelector('#general-information').hidden = true;
    document.querySelector('#personal-preferences').hidden = false;
    document.querySelector('#p2top1').addEventListener('click', goBackTo1stPage)
    document.querySelector('#section3').hidden = true;
}

function goBackTo1stPage(e) {
    document.querySelector('#general-information').hidden = false;
    document.querySelector('#personal-preferences').hidden = true;
    document.querySelector('#section3').hidden = true;
}

function goBackTo2ndPage(e) {
    e.preventDefault(e);
    document.querySelector('#personal-preferences').hidden = false;
    document.querySelector('#section1').hidden = true;
    document.querySelector('#section3').hidden = true;
}


function goTo3rdPage(e) {
    e.preventDefault(e);
    document.querySelector('#personal-preferences').hidden = true;
    document.querySelector('#section1').hidden = false;
    document.querySelector('#selection').hidden = true;
    document.querySelector('#gobackbutton').addEventListener('click', goBackTo2ndPage);
    document.querySelector('#goforwardbutton').addEventListener('click', goTo4thPage);
    document.querySelector('#section3').hidden = true;

}
function goBackTo3rdPage(e) {
    e.preventDefault(e);
    document.querySelector('#section1').hidden = false;
    document.querySelector('#section2').hidden = true;
    document.querySelector('#section3').hidden = true;
}



function goTo4thPage(e) {
    e.preventDefault(e);
    document.querySelector('#section1').hidden = true;
    document.querySelector('#section2').hidden = false;
    document.querySelector('#section3').hidden = true;
    document.querySelector('#backto3rdpage').addEventListener('click', goBackTo3rdPage)
    document.querySelector('#direction').addEventListener('change', sortOverview);
    document.querySelector('#filter').addEventListener('change', handleSortOverview);

}

function goTo5thPage(e) {
    e.preventDefault(e);
    document.querySelector('#section2').hidden = true;
    document.querySelector('#section3').hidden = false;
}

function displayRenewabilityPercentage(e) {
    e.preventDefault();
    let percentage = document.querySelector('#renewability').value;
    document.querySelector('.range').innerHTML = percentage + "%";
}

let overallUserInfo = {
    postcode: null,
    customerSelection: null,
    contractsType: null,
    slider: null,
    amenities: null,
    pplInHouse: null,
    typeOfProperty: null,
    insulationSituation: null,
}


function getGeneralInformationFor1stPage(e) {
    e.preventDefault();
    overallUserInfo.contractsType = getCheckboxInfo()
    overallUserInfo.postcode = document.querySelector('#postcode').value;
    overallUserInfo.customerSelection = document.querySelector('input[name="vatpercentage"]:checked').value;
    overallUserInfo.contractsType = document.querySelectorAll('input[name="contracttype"]:checked');
    return overallUserInfo;
}
function getGeneralInformationFor2ndPage() {
    overallUserInfo.slider = document.querySelector('input#renewability').value;
    overallUserInfo.amenities = document.querySelectorAll('input[name="amenities"]:checked');
    overallUserInfo.pplInHouse = document.querySelector('#ppl-In-House').value;
    overallUserInfo.typeOfProperty = document.querySelector('input[name="propertytype"]:checked').value;
    overallUserInfo.insulationSituation = document.querySelector('input[name="insulation"]:checked').value;
    console.log(overallUserInfo);

}


function calculateOptimalTariff(e) {

}


