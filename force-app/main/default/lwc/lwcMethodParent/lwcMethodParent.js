import { LightningElement } from 'lwc';
export default class LwcMethodParent extends LightningElement {
    parentText = 'This is default in parent';
    handleTextChange(event) {
        const childCmp = this.template.querySelector('c-lwc-method-child');
        childCmp.changeTheString(event.detail.value);
        
        const input = this.template.querySelector('lightning-input');
        console.log(JSON.parse(JSON.stringify(input.value)));
    }
}