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
