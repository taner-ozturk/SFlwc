import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
export default class LdsEditForm extends LightningElement {
    @api recordId;
    @api objectApiName = "Lead";
    
    nameField = NAME_FIELD;
    emailField = EMAIL_FIELD;
    sourceField = SOURCE_FIELD;
    companyField = COMPANY_FIELD;
}