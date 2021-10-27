import { LightningElement, track } from 'lwc';
export default class LwcParentPrimNonPrim extends LightningElement {
    @track
    contactRec = {
        firstName : 'Selcuk',
        lastName : 'A'
    }
}