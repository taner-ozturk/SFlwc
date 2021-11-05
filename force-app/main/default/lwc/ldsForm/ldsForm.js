import { LightningElement , api } from 'lwc';
export default class LdsForm extends LightningElement {
    @api recordId;
    //@api objectApiName;
    @api objectApiName="Lead";
    
    layoutType = 'Full'; //Compact
    fields = ['Name', 'Email', 'Company', 'LeadSource'];
}