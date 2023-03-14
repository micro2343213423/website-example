"use strict";
/* exported calculateMonthlyPrice, calculateVAT */


function calculateMonthlyPrice(electricalconsumtion) {

    let monthlycostforoptele = (_tariffs[0].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);
    let index = [_tariffs[0], _tariffs[1], _tariffs[2], _tariffs[3], _tariffs[4],_tariffs[5]];

    index.forEach(monthlycostforoptele => {
        ([index].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);
    })

    let monthlycostforoptgas = (_tariffs[1].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);

    let monthlycostforgenele = (_tariffs[2].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);

    let monthlycostforgengas = (_tariffs[3].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);

    let monthlycostformedele = (_tariffs[4].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);

    let monthlycostformedgas = (_tariffs[5].pricePerkWh * calculateAverageElectricityConsumption(electricalconsumtion) / 12).toFixed(0);

    let monthlycostvaluearray = [monthlycostforoptele, monthlycostforoptgas, monthlycostforgenele, monthlycostforgengas, monthlycostformedele, monthlycostformedgas];

    return monthlycostvaluearray;

}


function calculateVAT(price, vatPercentage) {
}
