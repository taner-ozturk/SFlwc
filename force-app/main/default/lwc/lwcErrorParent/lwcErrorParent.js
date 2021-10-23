import { LightningElement } from 'lwc';
export default class LwcErrorParent extends LightningElement {
    errorCallback(error, stack) {
        console.log('errorCallback in Parent: ', JSON.parse(JSON.stringify(error)));
        console.log('stack: ', stack);
    }
}