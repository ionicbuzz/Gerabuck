//here we define what a promise is. A promise is basically, just that, a promise. It can be fulfilled, or not.
// hence the output is either yes or no, aka 'resolve' and 'reject' in the following example
const a = 69;

function p() {
    return new Promise((resolve, reject) => {
        if (a == 69){
            resolve('Noice'); //in case you haven't noticed, this is a simple timer function that resolves after 3.5 seconds
        }
        else {
            reject('Not noice')
        }
    });
}

/*let p = new Promise((resolve, reject) => {  //defining a promise to have two outcomes, standard stuff.
let a = 23 * 3          //use let here because we only want it defined in the block, not outside it.
    if (a == 69) {      //notice the use of if else here, which determines if the promise is fulfilled or not.
        resolve('Noice')//output if the cond is fulfilled
    }
    else {
        reject('Not noice') //output if the cond is not met
    }
})     */     //yes, you can do as many if else you want. Yes, anotheer method for chaos

//below is how we summon the promise. User input is important here, but you can define placeholder inputs for the time being.
p().then((output) => {
    console.log('Here, the promise is fulfilled! ' + output)    //the outcome where the promise cond is fulfilled
}).catch((output) => {
    console.log('The promise is not fulfilled... ' + output)    //the outcome where the promise cond is not fulfilled
}).finally(
    () => {
        console.log('The promise has executed successfully.')
    }
)

//ASYNC AND AWAIT
//here, we deal with the magic of the future aka calling promises
function anEternityLater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Heck yeah babyyy!!!'); //in case you haven't noticed, this is a simple timer function that resolves after 3.5 seconds
        }, 3500);
    });
}

async function asyncCall() {
    console.log('Async call executed, now lets wait for an eternity...')
    const result = await anEternityLater();                             //the reason for async is to use {await} inside it where 
    console.log(result)                                                 //await makes the program pause for a moment and let the promise
}                                                                       //fulfill first before continuing thru the code.

asyncCall();