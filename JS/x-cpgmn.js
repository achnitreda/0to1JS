// 1- create a function that gives u number of repeated words given in array

const Words = ["the", "dog", "trash", "the", "yes", "okay"];

function countWords(words){
  const wordCount = [];
  const counts = [];

  for(const word of words){
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

console.log(countWords(Words));


// 2- create a fn that contains 2 arguments first it's array of words that we should filter and seconf arg it's a string of letters used to filter our words 
// return an array of filtered words

function filterWords(words,letters){
    
    const letterArray = letters.split('');
    console.log(letterArray);
 
    const filteredWords = words.filter(word => {
     const wordLetters = word.split('');
     console.log(wordLetters);
 
     return letterArray.every(letter => wordLetters.includes(letter))
    })
    
    return filteredWords;
 }
 
 const words = ['apple','banana','orange','mango','grapes']
 const letters = 'p';
 
 console.log(filterWords(words,letters)) // ['apple','grapes']
