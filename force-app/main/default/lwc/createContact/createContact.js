import { api, LightningElement } from 'lwc';
import upsertContactApex from '@salesforce/apex/ContactControllerImperative.upsertContact';

export default class CreateContact extends LightningElement {
    firstName;
    lastName;
    
    @api
    recordId;

    handleFirstNameChange(event) {
        this.firstName = event.detail.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.detail.value;
    }

    upsertNewContact(event) {
        upsertContactApex({
            firstName: this.firstName,
            lastName: this.lastName,
            recordId: this.recordId
        })
            .then(result => {
                console.log(JSON.stringify(result));
                alert('Contact created with Id: ' + result.Id);
            })
            .catch(error => {
                console.log('error: ', error);
                // alert(error);
            });
    }
}