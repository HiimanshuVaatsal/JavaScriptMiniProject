let sentence="This is a sunny day";
let newSentence = sentence.split(" ").map((eachword)=>{
    return eachword.split("").reverse().join("");
})

console.log(newSentence.join(" "));