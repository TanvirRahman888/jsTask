//Write a function to find the longest word in a given string.
function longWord(Sentence){
    let words=Sentence.split(' ');
    let len=[];  //For Checking words lengths
    console.log("Words in the Sentence : ",words);
    for (let i = 0; i < words.length; i++) {
        len.push(words[i].length);        
        // len.push(parseInt(words[i].length));        
    }
//------------------------------------------------
    for(let i =0; i< len.length; i++){
        console.log("Type of the lengths Array value : ",typeof len[i], len[i]);
        // len[i]=parseInt(len[i]);
        // console.log("Type of the lengths",typeof len[i], len[i]);
    }
    console.log("Lengths Array :",len);
    console.log("Max Lengths",Math.max(...len)); //Can't understand "..."
    console.log("Index of the Max Lengths",len.indexOf(Math.max(...len)));
//------------------------------------------------
    let lw=len.indexOf(Math.max(...len));
    console.log("Index of the Longest Word : ",lw);
    return words[lw];
    
}
const Sentence="I am learning Programming to become a programmer........";
console.log("The Longest Word : ",longWord(Sentence));