import { LightningElement, api } from 'lwc';
export default class LdsViewForm extends LightningElement {
    @api recordId;
    @api recordid;
    @api objectApiName;
    connectedCallback() {
        console.log(' recordId: ', this.recordId);
        console.log(' recordid: ', this.recordid);
        console.log(' objectApiName: ', this.objectApiName);
    }
}