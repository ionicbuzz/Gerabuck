const Contacts = require("../models/contacts.model");

const createNewContacts = (body) => {
    return Contacts.create({ ...body});
}

const findContactsForUser = (id) => {
    return Contacts.find({ user: id});
}

const findSingleContactById = (id) => {
    return Contacts.findById(id);
}

const findSingleContactByIdForCurrentUser = (contactId, userId) => {
    const singleContactForCurrentUser = Contacts.findOne({
        user: userId, _id: contactId
    });

    return singleContactForCurrentUser;
}

const findSingleContactByIdAndUpdate = async (oriContact, updatedBody) => {
    const updatedContact = await Contacts.findOneAndUpdate(
        oriContact,
        updatedBody,
        {
            new: true
        });

    return updatedContact;
}

const findsingleContactByIdAndDelete = (contactId, userId) => {
    return Contacts.findOneAndDelete({ id: contactId, user: userId });
}

module.exports = { 
    createNewContacts,
    findContactsForUser,
    findSingleContactById,
    findSingleContactByIdForCurrentUser,
    findSingleContactByIdAndUpdate,
    findsingleContactByIdAndDelete
 };