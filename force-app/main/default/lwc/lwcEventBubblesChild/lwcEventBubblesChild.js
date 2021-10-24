import { LightningElement } from 'lwc';
export default class LwcEventBubblesChild extends LightningElement {
    msgFromChild = 'This is default Message';
    constructor() {
        super();
        this.template.addEventListener('btnclick', this.handleEvent.bind(this));
    }
    handleClick(event) {
        let eventRec = new CustomEvent('btnclick', {
            bubbles: true,
            composed: false,
            detail: 'This is event message'
        });
        let parentDiv = this.template.querySelector('div');
        parentDiv.dispatchEvent(eventRec);
    }
    handleEvent(event) {
        this.msgFromChild = event.detail;
    }
    
}