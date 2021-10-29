import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost';
export default class PubSubPublisher extends LightningElement {
    handleClick(event) {
        let eventData = {
            detail: 'Avengers EndGame added to collection'
        }
        pubsub.fire('clickevent', eventData);
    }
}