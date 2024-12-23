export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  for(; i< breaks.length; i+= jumpAmount){
    if(breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for(let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if(breaks[i]) {
      return i;
    }
  }

  return -1;
}

const breaksAtFive = [false, false, false, false, false, true, true];
console.log(twoCrystalBalls(breaksAtFive)); // Should print the index where the ball break: 5 


const breaksAtOne = [false, true, true, true, false, true, true, true, true, true, true];
console.log(twoCrystalBalls(breaksAtOne)); // Should print the index where the ball break: 1 

