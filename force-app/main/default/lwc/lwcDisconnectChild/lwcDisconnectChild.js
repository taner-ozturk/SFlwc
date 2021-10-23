import { LightningElement } from 'lwc';

export default class LwcDisconnectChild extends LightningElement {
    disconnectedCallback() {
        console.log('This is disconnected in Child component');
    }
}