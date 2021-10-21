import { LightningElement, track } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunitiesImperative.getOpportunities';

export default class LwcImperative extends LightningElement {
    @track
    opportunities;

    @track
    error;

    handleLoad() {
        getOpportunities()
            .then(result => {
                this.opportunities = result;
                this.error = undefined;
            })
            .catch(error => {
                this.opportunities = undefined;
                this.error = error;
            });
    }
}