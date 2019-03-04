// dwarfrollcall

var theArray= ["Doc", "Dopey", "Bashful", "Grumpy"];
function mapping(name,index){
	return (index+1)+ "."+ name; // returns the number placement of the elements (1. , 2. , 3. , 4.)
}
function mapFn(arr){ 
	return arr.map(mapping).join(' ') // maps the mapping function to each element of the array, then it combines the new array into a string.
}
var result= mapFn(theArray);
console.log(result); // the result.


function dwarvesRollCall(dwarves){
    
    var outputArray = []
    
    for(let i = dwarves.length/2; i < dwarves.length; i++){
        outputArray.push(`${i+1}. ${dwarves[i]}`)
    }
    
    return outputArray.join(', ')
}




// Summon Captain Planet
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

var map = planeteerCalls.map(function(x) { // maps the function to each element of the array.
	return x.toUpperCase() + "!";
});

console.log(map); // LOGS THE NEW MAP ARRAY WITH THE DESIRED RESULTS
console.log(map.length); // length of the map array

function summonCaptainPlanet() {
	console.log(map)
};

summonCaptainPlanet(); // CALLING THE FUNCTION TO GET THE DESIRED ARRAY






// Long Planeteer Calls

var shortwords = ["wind", "fire"];
var assortedwords = ["earth" , "wind", "heart", "fire"];

function longplaneteercalls (arr) {
	let shortlength = 4 // a container variable which refers to the maximum number to return false
	

	if (arr.length > 0) { 
		for (let i = 0; i < arr.length; i++) { //iterates through any array
			if (arr[i].length <= shortlength) { //if the word in the array is shorter than 4
				return false
			} else { //otherwise do this
				return true
			};
		};
	};
};

longplaneteercalls(shortwords); // returns FALSE
longplaneteercalls(assortedwords); // returns TRUE






// FIND THE CHEESE

var cheeses = ['cheddar', 'gouda' , 'camembert', 'swiss'];
var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];

var items = ['apple', 'cheddar', 'banana'];
var items2 = ['pineapple', 'cheddar', 'gouda']


var ingredients = ["garlic", "rosemary", "bread"];




function FindtheCheese(arr) {
	var cheesefound;


	for (let i = 0; i < cheeses.length; i++) { // iterates through the cheeses array
		for (let j = 0; j < arr.length; j++) { // then iterates through given array
			if (arr[j] === cheeses[i] ) { // if an element at any given array is equal to any element in the cheeses array, this code is executed
				cheesefound = (arr[j]);
				return cheesefound
				
			}
		}
	}

	return "No cheese!" // executed if there are no cheeses in the array
};


FindtheCheese(ingredients); // returns NO CHEESE!
FindtheCheese(snacks); // returns 'gouda'
FindtheCheese(soup); // returns "cheddar"


function wordsThatStartWithB(words){
    var array = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith('b') === true ) {
           array.push(words[i]);
            
            
        } 
    }
    
    return array
}

"brian".startsWith('b') // true
"emily".startsWith('b') // false    
wordsThatStartWithB(['banana', 'cherry', 'dragon fruit']) // ['banana']
wordsThatStartWithB(['brian', 'bob', 'chad']) //['brian', 'bob']
wordsThatStartWithB(['jim', 'jo', 'jon']) // []





