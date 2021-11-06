import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class LdsWireGetRecord extends LightningElement {
    @api recordId;
    name;
    email;
    mobile;
    @wire(getRecord, { recordId: '$recordId', fields: ['Contact.Name', 'Contact.Email','Contact.MobilePhone'] })
    getRecordInfo({ error, data }) {
        if (data) {
            console.log('Data from get record: ' + JSON.stringify(data));
            this.name = data.fields.Name.value;
            this.email = data.fields.Email.value;
            this.mobile = data.fields.MobilePhone.value;
        } else if (error) {
            console.log('Error from get record: ' + JSON.stringify(error));
        }
    }
}