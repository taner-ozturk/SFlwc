import { LightningElement, track, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class LdsWireGet extends LightningElement {
    @track objectInfoProperty;
    // @wire(getObjectInfo, { objectApiName: LEAD_OBJECT })
    // objectInfoFunction({ error, data }) {
    //     if (data) {
    //         this.objectInfoProperty = data;
    //         console.log('This is the object Info: ', JSON.stringify(data));
    //         console.log('This is the object Prefix: ', data.keyPrefix);
    //         console.log('This is the object Label: ', data.label);
            
    //         console.log('This is the object\'s field: ', data.fields.AnnualRevenue);
    //     } else if (error) {
            
    //     }
    // }
    @wire(getObjectInfos, { objectApiNames: [LEAD_OBJECT, CONTACT_OBJECT] })
    objectInfosFunction({ error, data }) {
        if (data) {
            console.log('This is the objects Info: ', JSON.stringify(data));
            for (let i = 0; i < data.results.length; i++){
                let objectInfo = data.results[i];
                if (objectInfo.statusCode === 200) {
                    let objectResult = objectInfo.result;
                    console.log('This is the object Prefix: ', objectResult.keyPrefix);
                    console.log('This is the object Label: ', objectResult.label);
                }
            }
        } else if (error) {
            
        }
    }
}