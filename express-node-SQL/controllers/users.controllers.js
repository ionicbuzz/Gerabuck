//{ id, name, age}
let users = [];

const userRoot = (req, res) => {
    //res.json("Root directory for users");
    res.json(users);
};

const userId = (req, res) => {
    const { id } = req.body;  //multiple requests lesgooo
    const user = users.find((u) => u.id === id);
    if (!user) return res.json({error: "User not found or does not exist"});
    
    res.json("Hello user " + user.name);   //yep, this is how you respond with multiple variables
}

const createUser = (req, res) => {
    const { id, name, age} = req.body;
    if (!(id && name && age)) return res.json({error: "Not enough info. Please enter id, name and age"});
    const user = { id, name, age };
    if (users.find((u) => u.id === id)) return res.json({error: "This user already exists"});
    users.push(user);
    res.json(users);
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === id);
    if (!user) return res.json({error: "User doesn't exist"});
    users = users.filter((u) => u.id != id);
    res.json(user);
}

const updateUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === id);
    if (!user) return res.json({error: "User doesn't exist"});
    users = users.filter((u) => u.id != id);
    const updatedUser = {
        ...user,
        ...req.body
    };
    users.push(updatedUser);
    res.json(updatedUser);
}

module.exports = { userRoot, userId, createUser, deleteUser, updateUserById };