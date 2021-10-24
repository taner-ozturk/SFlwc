import { LightningElement } from 'lwc';
export default class LwcChildEvent extends LightningElement {
    handleButton(event) {
        let newCustomEvent = new CustomEvent('buttonclick');
        this.dispatchEvent(newCustomEvent);
    }
}