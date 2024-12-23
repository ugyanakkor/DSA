export default function binarySearchList(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  do{
    const middle = Math.floor(low + (high - low) / 2);
    const value = haystack[middle];
    if(value === needle) {
      return true;
    } else if(value > needle) {
      high = middle;
    } else {
      low = middle +1;
    }
  } while(low < high);

  return false;
}

// Example usage
const haystack = [1, 2, 3, 4, 5];
const needle = 3;
console.log(binarySearchList(haystack, needle)); // Should print: true

const needleOne = 1;
console.log(binarySearchList(haystack, needleOne)); // Should print: true

const needleFour = 4;
console.log(binarySearchList(haystack, needleFour)); // Should print: true

const impossibleNeedle = 10;
console.log(binarySearchList(haystack, impossibleNeedle)); // Should print: false