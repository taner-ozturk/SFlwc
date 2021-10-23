






import { api, LightningElement } from 'lwc';

export default class LwcLifeHooks extends LightningElement {
    @api
    publicProperty = 'This is original value (lwc-life-hooks)';

    privateProperty = 'This is private original';

    constructor() {
        super();
        console.log('18 public Property: ', this.publicProperty);
        this.publicProperty = 'This is constructor value (lwc-life-hooks)';
        console.log('20 Property 2: ', this.publicProperty);
        
        console.log('22 private Property: ', this.privateProperty);
        this.privateProperty = 'This is constructor private value (lwc-life-hooks)';
        console.log('24 private Property 2: ', this.privateProperty);
    }

    connectedCallback() {
        console.log('28 public property: ', this.publicProperty);
        this.publicProperty = 'Changed public property in line 29';
        console.log('30 public property: ', this.publicProperty);
        console.log('31 child component: ', this.querySelector("c-lwc-composition-child"));
    }
}