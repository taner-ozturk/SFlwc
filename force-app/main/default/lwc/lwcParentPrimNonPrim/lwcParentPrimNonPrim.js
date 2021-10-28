import { LightningElement, track } from 'lwc';
export default class LwcParentPrimNonPrim extends LightningElement {
    primitiveString = 'This is Wednesday night';
    @track
    contactRec = {
        firstName : 'Selcuk',
        lastName : 'A'
    }
    handleTextChange(event) {
        this.primitiveString = event.detail.value;
    }
}