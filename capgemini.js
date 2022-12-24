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


// 2- create a fn that contains 2 arguments first it's array of words that we should filter and seconf arg it's a string of letters used to filter our words return an array of filtered words

function filterWords(words,letters){
    
    const letterArray = letters.split('');
    console.log(letterArray);
 
    const filteredWords = words.filter(word => {
     const wordLetters = word.split('');
     console.log(wordLetters);
 
     return letterArray.every(letter => wordLetters.includes(letter)); /* Checking if every letter in the letterArray is included in the wordLetters array. */
    })
    
    return filteredWords;
 }
 
 const words = ['apple','banana','orange','mango','grapes']
 const letters = 'p';
 
 console.log(filterWords(words,letters)) // ['apple','grapes']

//  complexity O(n*m) ??
