import { LightningElement } from 'lwc';
export default class LwcChildEvent extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    handleButton(event) {
        let info = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        let newCustomEvent = new CustomEvent('fetchcontact', { detail: info});
        this.dispatchEvent(newCustomEvent);
    }
    handleFirstName(event) {
        this.firstName = event.detail.value;
    }
    handleLastName(event) {
        this.lastName = event.detail.value;
    }
    handleEmail(event) {
        this.email = event.detail.value;
    }
}