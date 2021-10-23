import { LightningElement } from 'lwc';
export default class LwcErrorChild extends LightningElement {
    constructor() {
        super();
        console.log('This is child constructor');
        throw 'Failing child rendering';
    }
}