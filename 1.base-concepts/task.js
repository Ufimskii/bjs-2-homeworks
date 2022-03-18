function solveEquation(a, b, c) {
  if(a == 0)
      return [];
  let arr=[];
  let D = b * b - 4 * a * c;
  console.log("D = " + D);
  if(D < 0)
      return [];
  if(D == 0)
      arr = ((-b ) / (2 * a));
  else if(D > 0){
      arr.push((-b + Math.sqrt(D)) / (2 * a));
      arr.push((-b - Math.sqrt(D)) / (2 * a));
      arr = tmp;
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
