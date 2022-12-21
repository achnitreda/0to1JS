// 1- create a function that gives u number of repeated words given in array

const words = ["the", "dog", "trash", "the", "yes", "okay"];

function countWords(words){
    const wordCount = [];
  const counts = [];

    // loop O(n)
  for(const word of words){
   /* Checking if the word is in the counts array, if it is, it will add 1 to the count of that word.
   If it is not, it will add the word to the counts array and set the count to 1. */
    if(word in counts){
        counts[word]++;
    }
    else{
        counts[word]=1;
    }
  }
  // loop O(n)
  for(const word in counts){
    wordCount.push(counts[word])
  }
  return wordCount;
}

console.log(countWords(words));

// Time Complexity of the function: O(n+n) = O(n)



