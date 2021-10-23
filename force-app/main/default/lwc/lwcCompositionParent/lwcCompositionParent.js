import { LightningElement } from 'lwc';

export default class LwcCompositionParent extends LightningElement {
    handleOnclick(event) {
        console.log('QuerySelector: ', this.template.querySelectorAll('.greenBackground'));
    }
}