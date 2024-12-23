export default function linearSearch(haystack: number[], needle: number): boolean {
  for(let i = 0; i< haystack.length; i++) {
    if(haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

// Example usage
const haystack = [1, 2, 3, 4, 5];
const needle = 3;
console.log(linearSearch(haystack, needle)); // Should print: true

const impossibleNeedle = 10;
console.log(linearSearch(haystack, impossibleNeedle)); // Should print: false
