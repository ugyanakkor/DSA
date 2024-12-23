export default function bubbleSort(unsorted: number[]): number[] {
  for(let i = 0; i< unsorted.length - 1; i++) {
    for(let j = i+1; j< unsorted.length; j++) {
      if(unsorted[i] > unsorted[j]) {
        let temp = unsorted[i];
        unsorted[i] = unsorted[j];
        unsorted[j] = temp;
      }
    }
  }
  return unsorted;
}

// Example usage
var unsortedList = [4, 2, 78, 3, 6, 63, 49];
console.log(bubbleSort(unsortedList)); // Should print: [ 2, 3, 4, 6, 39, 63, 78]