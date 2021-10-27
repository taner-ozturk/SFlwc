import { api, LightningElement } from 'lwc';
export default class LwcChildPrimNonPrim extends LightningElement {
    @api
    publicProperty; //This doesnt have a default
    connectedCallback() {
        console.log('15 public property: ', this.publicProperty);
    }
}