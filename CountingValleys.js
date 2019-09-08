/*
    Counting Valleys


    Number of item (values of S) is between 2 and 10^6.
    N is an integer, beteen 2 and 10^6.
    N = total # of values of S
*/

/*  Solution 1

function countingValleys(n, s) {
    let mountainSteps = 0
	let valleySteps = 0
	let currentLevel = 0
    let stepHistory = []
    
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'U') {
			mountainSteps++
			currentLevel++
			stepHistory.push(currentLevel)
		} else if (s[i] === 'D') {
			valleySteps++
			currentLevel--
			stepHistory.push(currentLevel)
		}
    }
    
	let stepsAtSeaLevel = 0
	for (let i = 0; i < stepHistory.length; i++) {
		if (stepHistory[i] === 0 && stepHistory[i - 1] < 0) {
			stepsAtSeaLevel++
		}
    }
    
	return stepsAtSeaLevel
}
    


//--------------------------------------------------------------------



Soultion 2
// Initilal
function countingValleys(n, s) {
     const min = 2;
     const max = 1000000;
     let valleys = 0;
     let isInValley = false; 
     
     s = (typeof s === "string") ? s.split('') : s;
 
     if (s.length >= min
          && s.length <= max
          && n === parseInt(n, 0)
          && n >= min
          && n <= max 
          && n === s.length) {
          
          s = s.map(steps => ((steps === "U") ? 1 : -1));
          
          let path = 0;
          for(let i in s) {
               path += s[i];
               if (path < 0 && !isInValley) {
                    isInValley = true; 
               }
               if (path == 0 && isInValley) {
                    valleys++;
                    isInValley = false;
               }    
          } 
     }
      
     return valleys; 
}

// Refactored -- More performant

function countingValleys(n, s) {
     const min = 2;
     const max = 1000000;
     let isInValley = false;
     let valleys = 0;
     s = (typeof s === "string") ? s.split('') : s;
 
     if (s.length >= min
          && s.length <= max
          && n === parseInt(n, 0)
          && n >= min
          && n <= max 
          && n === s.length) {
          
          s.map(steps => ((steps === "U") ? 1 : -1))
               .reduce((prev, next) => {
                    if (prev < 0 && !isInValley) {
                         isInValley = true;
                    }
                    if ((prev + next) === 0 && isInValley) {
                         valleys++;
                         isInValley = false;
                    }

                    return prev + next;    
               });
     } 
     
     return valleys; 
}


*/
