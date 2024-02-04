//Generate a random number between 10 to 20.

function randomNumber(){
    for (;;) {
        let x=(Math.random()*20);
        if(x>10 && x<20 ){
            return x; 
        }        
    }
}
console.log(randomNumber());