import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import getContactsByKeyword from '@salesforce/apex/ContactController.getContactsByKeyword';

export default class LwcWire extends LightningElement {
    //@wire (getContacts) contacts; 

    searchTerm = '';
    keyword = '';

    @wire(getContactsByKeyword, { keyword: '$keyword' }) 
    contacts;

    // @track contacts;
    // @track error;

    // @wire(getContacts)
    // contactFetch({ error, data }) {
    //     if (data) {
    //         this.contacts = data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.contacts = undefined;
    //         this.error = error;
    //     }
    // } ;

    handleInputChange(event) {
        this.searchTerm = event.target.value;
    }

    handleClick(event) {
        this.keyword = this.searchTerm;
    }
}