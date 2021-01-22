// https://github.com/hossainrabbi/assignment-3-basicJavaScript

// 1. Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return 'Unexpected Value';
  }
  // 1 km = 1000 m
  return kilometer * 1000;
}

const $2meter = kilometerToMeter(2);
console.log($2meter);

// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return 'Unexpected Value';
  }
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
  let money = 0;

  if (day < 0) {
    return 'Unexpected Day';
  } else if (day <= 10) {
    // 1st: 1day - 10day => 1day = 100
    money = day * 100;
  } else if (day <= 20) {
    const firstPart = 10 * 100;
    const remaining = day - 10;
    // 2nd: 11day - 20day => 1day = 80
    const secondPart = remaining * 80;
    money = firstPart + secondPart;
  } else {
    const firstPart = 10 * 100;
    const secondPart = 10 * 80;
    const remaining = day - 20;
    // 3rd: 21day - 21+..day => 1day = 50
    const thirdPart = remaining * 50;
    money = firstPart + secondPart + thirdPart;
  }

  return money;
}

console.log(hotelCost(5));

// 4. Mega Friend
function megaFriend(friends) {
  let longName = '';
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length <= 0) {
      return 'Unexpected Value';
    } else if (friends[i].length > longName.length) {
      longName = friends[i];
    }
  }
  return longName;
}

console.log(megaFriend(['Ashiq', 'Rakib', 'Kawsar', 'Nur', 'Rohan', 'Abir']));
