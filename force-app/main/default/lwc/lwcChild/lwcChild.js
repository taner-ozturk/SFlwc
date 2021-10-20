import { LightningElement, api } from 'lwc';

export default class LwcChild extends LightningElement {
    @api strVar = 'This is from child component';
    
    // countryName = "USA";
    get countryName() {
        return 'USA';
    };
}