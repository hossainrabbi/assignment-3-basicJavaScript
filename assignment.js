// https://github.com/hossainrabbi/assignment-3-basicJavaScript

// 1. Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
  // 1 km = 1000 m
  return kilometer * 1000;
}

const $2meter = kilometerToMeter(2);
console.log($2meter);

// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  // watch price = 50
  const totalWatch = watch * 50;
  // phone price = 100
  const totalPhone = phone * 100;
  // laptop price = 500
  const totalLaptop = laptop * 500;

  return totalWatch + totalPhone + totalLaptop;
}

const watch2Phone3Laptop1 = budgetCalculator(2, 3, 1);
console.log(watch2Phone3Laptop1);

// 3. Hotel Cost
function hotelCost(day) {
  let tk = 0;

  if (day < 1) {
    return 'Unexpected Day';
  } else if (day <= 10) {
    // 1st 10day => 1day = 100
    tk = day * 100;
  } else if (day <= 20) {
    const first10Day = 10 * 100;
    const remaining = day - 10;
    // 2nd 10day => 1day = 80
    const second10Day = remaining * 80;
    tk = first10Day + second10Day;
  } else {
    const first10Day = 10 * 100;
    const second10Day = 10 * 80;
    const remaining = day - 20;
    // 3rd 10day => 1day = 50
    const third10Day = remaining * 50;
    tk = first10Day + second10Day + third10Day;
  }

  return tk;
}

console.log(hotelCost(5));
