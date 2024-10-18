const asyncHandler = require("express-async-handler");
const { createNewContacts, findContactsForUser, findSingleContactByIdForCurrentUser, findSingleContactByIdAndUpdate, findsingleContactByIdAndDelete } = require("../services/contacts.service");

//Creates a new contact for currently logged in user
const createNewContactsHandler = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!(name && email && phone)) throw new Error("Name, email and phone number are required.");

    const contactDetails = await createNewContacts({user: req.user.id, name, email, phone });

    res.status(201).json({ msg: "Contact details successfully created", contactDetails });
})

//Finds all contacts created by the logged in user
const accessUserContactsHandler = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const contacts = await findContactsForUser(userId);
    if (contacts.length === 0) res.status(404).json({ msg: "Your contact list is empty."});
    res.status(200).json(contacts);
})

//Find a single contact. Needs id of contact
const findSingleContactHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const singleContact = await findSingleContactByIdForCurrentUser(id, userId);

    if (!singleContact) res.status(404).json({ msg: "This contact does not exist in your contacts list."});

    res.status(200).json(singleContact);
})

//Find a single contact and update. Updated fields sent through JSON body. Id obtained from URL.
const findSingleContactByIdAndUpdateHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const updateBody = req.body;

    const singleContact = await findSingleContactByIdForCurrentUser(id, userId);

    if (!singleContact) res.status(404).json({ msg: "This contact does not exist in your contacts list."});

    const updatedContact = await findSingleContactByIdAndUpdate(singleContact, updateBody);
    
    res.status(200).json(updatedContact);
})

//Find one contact using id, then delete.
const findSingleContactByIdAndDeleteHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const singleContact = await findSingleContactByIdForCurrentUser(id, userId);

    if (!singleContact) res.status(404).json({ msg: "This contact does not exist in your contacts list."});

    const deletedContact = await findsingleContactByIdAndDelete(id, userId);

    res.status(200).json({ msg: "Contact has been deleted.", deletedContact });
})

module.exports = {
    createNewContactsHandler,
    accessUserContactsHandler,
    findSingleContactHandler,
    findSingleContactByIdAndUpdateHandler,
    findSingleContactByIdAndDeleteHandler
};