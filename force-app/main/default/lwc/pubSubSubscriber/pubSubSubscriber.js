import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost';
export default class PubSubSubscriber extends LightningElement {
    eventMessage = 'This is default before receiving';
    connectedCallback() {
        pubsub.register('clickevent', this.handleClickEvent.bind(this));
        //Deepak.handleClickEvent
    }
    handleClickEvent(event) {
        this.eventMessage = event.detail;
    }
    disconnectedCallback() {
        pubsub.unregister('clickevent', this.handleClickEvent.bind(this));
    }
}