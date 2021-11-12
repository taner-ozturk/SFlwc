import { api, LightningElement } from 'lwc';

export default class RichTextEditor extends LightningElement {
    @api fieldLevelHelp;
    @api required;
    @api label;
    @api richTextVal; 

    handleRichTextChange(event) {
        this.richTextVal = event.detail.value;
    }
}