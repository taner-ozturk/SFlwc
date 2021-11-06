import { LightningElement, api, wire, track } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DEP_FIELD from '@salesforce/schema/Contact.Department';
export default class LdsWireGetRecord extends LightningElement {
    @api recordId;
    name;
    // email;
    // mobile;
    @track contact;
    FIELDS = [NAME_FIELD, MOBILE_FIELD, EMAIL_FIELD, DEP_FIELD];
    @wire(getRecord, { recordId: '$recordId', fields: '$FIELDS'})
    getRecordInfo({ error, data }) {
        if (data) {
            console.log('Data from get record: ' + JSON.stringify(data));
            this.contact = data;
            this.name = getFieldValue(this.contact, NAME_FIELD);
            // this.email = data.fields.Email.value;
            // this.mobile = data.fields.MobilePhone.value;
        } else if (error) {
            console.log('Error from get record: ' + JSON.stringify(error));
        }
    }
    // get name() {
    //     return getFieldValue(this.contact, NAME_FIELD);
    // }
    get email() {
        return getFieldValue(this.contact, EMAIL_FIELD);
    }
    get mobile() {
        return getFieldValue(this.contact, MOBILE_FIELD);
    }
    get dept() {
        return getFieldValue(this.contact, DEP_FIELD);
    }
}