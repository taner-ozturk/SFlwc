import { LightningElement } from 'lwc';
export default class LwcParentEvent extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    handleChildButtonClick(event) {
        console.log('Child event was caught in parent component');
        this.firstName = event.detail.firstName;
        this.lastName = event.detail.lastName;
        this.email = event.detail.email;
    }
}