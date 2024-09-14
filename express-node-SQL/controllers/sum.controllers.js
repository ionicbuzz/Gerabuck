const calcSum = (req, res) => {
    const { num1 , num2 } = req.query;  //returns the value of num1 and num2 using URL query in the form of string
    if (!(num1 && num2)) return res.send("Bad request");

    res.json({
        sum: Number(num1) + Number(num2)    //Number() converts values in num1 and num2 into actual numbers, not string 
    });
};

const postSum = (req, res) => {
    const { num1 , num2 } = req.body;
    if (!(num1 && num2)) return res.send("Bad request");

    res.json({
        sum: num1 + num2    //Number() is not needed here since we have defined them to be numbers in the JSON query using Insomnia 
    });
}

module.exports = { calcSum , postSum };