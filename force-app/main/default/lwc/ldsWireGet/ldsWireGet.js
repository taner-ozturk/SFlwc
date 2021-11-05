import { LightningElement, track, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import LEAD_OBJECT from '@salesforce/schema/Lead';
export default class LdsWireGet extends LightningElement {
    @track objectInfoProperty;
    @wire(getObjectInfo, { objectApiName: LEAD_OBJECT })
    objectInfoFunction({ error, data }) {
        if (data) {
            this.objectInfoProperty = data;
            console.log('This is the object Info: ', JSON.stringify(data));
            console.log('This is the object Prefix: ', data.keyPrefix);
            console.log('This is the object Label: ', data.label);
            
            console.log('This is the object\'s field: ', data.fields.AnnualRevenue);
        } else if (error) {
            
        }
    }
    // @wire(getObjectInfo, { objectApiName: LEAD_OBJECT })
    // objectInfoProperty;
}