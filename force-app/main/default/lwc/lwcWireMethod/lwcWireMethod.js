import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
//import getAccountsByKeyword from '@salesforce/apex/AccountController.getAccountsByKeyword';

export default class LwcWireMethod extends LightningElement {
    @track
    accounts;

    @track
    errorStatus= {}; //500

    @track
    errorMessage = '';
    
    @track
    searchTerm = '';

    @track
    enteredKeyword = '';

    @wire(getAccounts)
    accountsFetch({ error, data }) {
        if (data) {
            console.log(data);
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            console.log("getAccounts error=>", error);
            this.accounts = undefined;
            this.errorStatus = error.status;
            this.errorMessage = error.body.message;
            //console.log("getAccounts errorMessage=>", errorMessage);
        }
    }

    handleKeywordChange(event) {
        this.enteredKeyword = event.detail.value;
    }

    handleAccountSearch(event) {
        this.searchTerm = this.enteredKeyword;
    }
    
    // @wire(getAccountsByKeyword, { searchTerm: '$searchTerm' })
    // accountsFetchKeyword({ error, data }) {
    //     if (data) {
    //         this.accounts = data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.accounts = undefined;
    //         this.error = error;
    //         console.log("getkeyAccounts error=>", error);
    //         this.errorMessage = error.body.message;
    //         console.log("getkeyAccounts errorMessage=>", errorMessage);
    //     }
    // }
}