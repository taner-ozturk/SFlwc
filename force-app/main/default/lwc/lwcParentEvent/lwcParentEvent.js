import { LightningElement } from 'lwc';
export default class LwcParentEvent extends LightningElement {
    handleChildButtonClick(event) {
        console.log('Child event was caught in parent component');
        console.log(JSON.stringify(event));
    }
}