import { LightningElement, track } from 'lwc';

export default class LwcIfFor extends LightningElement {
    showTrueSection = false;
    aa=true
    @track accounts = [
        {
            'AccountId': '1',
            'Name': 'Google',
            'Location': 'California'
        },
        {
            'AccountId': '2',
            'Name': 'Facebook',
            'Location': 'Palo Alto'
        },
        {
            'AccountId': '3',
            'Name': 'Microsoft',
            'Location': 'San Francisco'
        }
    ]

    setSectionStatus(event) {
        console.log("event.target.value => ", event.target.checked)
        this.showTrueSection = event.target.checked;
    }
}