import { LightningElement, api } from 'lwc';
export default class LwcMethodChild extends LightningElement {
    methodChangedString = 'This is default in child component';
    @api changeTheString(newStrValue) {
        this.methodChangedString = newStrValue;
    }
}