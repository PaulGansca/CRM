import { addNewContact, getContacts,
     getContactWithID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    //GET ALL CONTACTCS
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    //POST NEW CONTACT
    .post(addNewContact);

    app.route('/contact/:contactId')

    //GET CONTACT BY ID
    .get(getContactWithID)

    //PUT CONTACT
    .put(updateContact)

    //DELETE CONTACT
    .delete(deleteContact);
}

export default routes;
