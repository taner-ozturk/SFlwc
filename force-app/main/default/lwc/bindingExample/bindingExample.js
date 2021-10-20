import { LightningElement, track} from 'lwc';

export default class BindingExample extends LightningElement {
    @track greetings = "Hello Human. Greetings from Martians";
    @track contact = { 'FirstName': 'Selcuk' };

    handleInputChange(event) {
        console.log("event value: ", event.target.value);
        this.greetings = event.target.value;
        this.contact.FirstName = event.target.value;
    }
}