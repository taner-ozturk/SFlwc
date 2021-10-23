import { LightningElement, api } from 'lwc';

export default class LwcCompositionChild extends LightningElement {
    @api
    information = 'This information originated in child component - JS binding';
}