import { LightningElement , api } from 'lwc';
export default class LdsForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    layoutType = 'Full'; //Compact
    fields = ['Name', 'Email', 'Company', 'LeadSource'];
}