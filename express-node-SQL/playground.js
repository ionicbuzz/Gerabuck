var x = 10;
console.log(x)

//to redeclare a variable, only var can be used as in the following example
var x = 69;
console.log(x)

{
    //in ES6, 'Let' can only be used in blocks like these
    let x = 2;
    console.log(x)
}

{
    //now here comes the neat part. Below is a use of 'const'
    const x = 420;  /*since this exists in a different block,
                     it holds its own value of x and can't be change by any 'let'
                    or 'var'*/
    
    console.log(x)  //how exciting!! Ofc it isn't going to be chaotic. Trust!
}

//ARROW FUNCTIONS
//in ES5, doing operations required functions as shown below
var y = 80085;
var x = function(x, y) {
    return x * y;
}

console.log(x(2, 3))

//however, the following in ES6, aka 'arrow functions', help make it easier
const z = (x, y) => x * y;  //declare as const because the function output stays the same
console.log(z(23, 3))

//ARRAYS
//ah yes, nothing more "structured" than a single variable to hold everything
const even = [2, 4, 6, 8, 10];

const equal_over_six = even.filter((a) => a >= 6);    //there's a lot going on in this line, so take it slow
//the even.filter() is filtering from the array 'even'. Inside it, we declared an arrow function to 
//check if each value of 'even' is >= 6. If it passes the cond, then it is put into array 'equal_over_six'
console.log(equal_over_six)

const times_ten = even.map((a) => a * 10);    //even.map() performs operations on each element in the array
//Ofc, an arrow function to define the operation, and creates a new array. No changes to the original array
console.log(times_ten, even)

even.sort((a, b) => {return b - a}) //to understand this, check out Numeric Sort at https://www.w3schools.com/js/js_array_sort.asp
//sort() only works normally for strings, so numeric sorts need some kind of operation as logic
console.log(even)

//here is an example of a normal string sort
const trees = ["Maple", "Cherry", "Chestnut", "Oak", "Bamboo"]
trees.sort();
console.log(trees)  //as you can see, even tho trees is supposed to be constant, it has now changed.
                    //yay JavaScript ig.

//so ofc, this begs the question, how do we make the sort into another array?
const nuts = ["Macadamia", "Peanut", "Deez", "Pistachio", "Almond"]
const sorted_nuts = nuts.toSorted();    //how delightful and simplified!!
console.log(sorted_nuts, nuts)

//now lets get into find() using 'even' and 'nuts' from above
const smaller_than_5 = even.find((a) => a < 5);
const deeznuts = nuts.find((a) => a == "Deez");
console.log(smaller_than_5, deeznuts)   //note that find only returns the first value that satisfies the conditions we set.
//for multiple answers, best to use filter() from line 40


//REST AND SPREAD (THE JAVASCRIPT WAY)
const shapesOne = ["Teardrop", "Round"], shapesTwo = ["Bell", "Archetype"]
const justice = [...shapesOne, ...shapesTwo];   //combine two arrays into one? Ez
console.log(justice)    //this is an example of spread.

const [fav, secondFav, ...stillGood] = justice; //this is an example of rest.
console.log(fav, secondFav, stillGood)  //depending on how you use '...', it can be either 'rest' or 'spread'.

//even better, object{} classes can also be combined. Lets make one for ourselves, shall we?
const doNut = {
    brand: 'Krispy Kreme',
    roundness: 'Perfect',
    glazed: 'sticky'
}

const doNotNut = {
    brand: 'Dunkin Donuts',
    flavor: 'Avocado oil',
    warmth: 'psychopathic'
}

const DDD = {...doNut, ...doNotNut} //note that for similar properties ('brand' in this case),
console.log(DDD)                    //the properties are overwritten instead of extended.