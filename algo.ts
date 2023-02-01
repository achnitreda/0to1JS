// greater number in an array

let arr = [1,2,3,43,888,2,5,333,22,4]

let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max) // 888

// name: grade: number -> alphabet
let grade : number = 89

if(grade >= 90 && grade < 100){
    console.log("A")
}else if(grade >= 80){
    console.log("B") // B
}else if(grade >= 70){
    console.log('C')
}else{
    console.log('D')
}

// loops
 



