// Code your solution here

function findMatching(arrayOfDriverNames, nameOfDriver) {
    return arrayOfDriverNames.filter(name => name.toLowerCase() === nameOfDriver.toLowerCase());
}

function fuzzyMatch(arrayOfDriverNames, strOfBeginning) {
    return arrayOfDriverNames.filter(name => {
        return fuzzyMatchHelper(name, strOfBeginning);
    });
}

function matchName(arrayOfDriverObj, nameOfDriver) {
    return arrayOfDriverObj.filter(obj => obj[`name`] === nameOfDriver);
}

function fuzzyMatchHelper(name, strOfBeginning){
    const lng = strOfBeginning.length;
    // console.log(`lng: ${lng}`);
    for (let i = 0; i < lng; i++){
        // console.log(`i: ${i}`);
        // console.log(`nameChar: ${strOfBeginning.charAt(i)}`);
        if (name.charAt(i) !== strOfBeginning.charAt(i)) {
            // console.log(`false`)
            return false;
        }
    }
    // console.log(`true`)
    return true;
}

// fuzzyMatchHelper(`Juan`, `Ja`);