function calculateElectronicsBudget(numOfDevs){
    if (typeof numOfDevs !=="object") {
        return "Must Insert an Object";
    }
    let laptopCost=0;
    let tabletCost=0;
    let mobileCost=0;
    for (const key in numOfDevs) {
        // if (numOfDevs.key!=='laptop'||'tablet'||'mobile') { //Support
        //     return "Laptop is mandatory in the Object"
        // }
        // if (numOfDevs.key!=='tablet') {
        //     return "Tablet is mandatory in the Object"
        // }
        // if (numOfDevs.key!=='mobile') {
        //     return "Mobile is mandatory in the Object"
        // }

        if ( typeof numOfDevs.laptop==="number") {
            laptopCost=35000 *numOfDevs.laptop;            
        }
        else{
            return "Number of Laptop must be a number";
        }
        if (typeof numOfDevs.tablet==="number") {
            tabletCost=15000 *numOfDevs.tablet;            
        }
        else{
            return "Number of Tablet must be a number";
        }
        if (typeof numOfDevs.mobile==="number") {
            mobileCost=20000 *numOfDevs.mobile;            
        }
        else{
            return "Number of Mobile must be a number";
        }
    }
    return laptopCost+tabletCost+mobileCost;

}

const numOfDevs = {
    'laptop':2,
    'tablet':1,
    'mobile':1,
    'watch':2
}
console.log(calculateElectronicsBudget(numOfDevs));