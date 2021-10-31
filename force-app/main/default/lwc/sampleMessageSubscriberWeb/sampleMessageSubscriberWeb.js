import { LightningElement , wire } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
export default class SampleMessageSubscriberWeb extends LightningElement {
    @wire(MessageContext)
    messageContext;
    subscription = null;
    payload = '';
    connectedCallback() {
        this.handleSubscribe();
    }
    
    handleSubscribe() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SAMPLEMC,
                payload => {
                    this.handleMessage(payload)
                },
                {scope: APPLICATION_SCOPE}
            );
        }
    }
    handleMessage(payload) {
        this.payload = JSON.stringify(payload);
    }
    handleUnsubscribe() {
        if (this.subscription) {
            unsubscribe(this.subscription);
            this.subscription = null;
            this.payload = '';
        }
    }
}