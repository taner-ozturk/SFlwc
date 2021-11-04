import { LightningElement , api } from 'lwc';
export default class LdsViewEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    showViewPage = true;
    handleEdit(event) {
        this.showViewPage = false;
    }
    handleView(event) {
        console.log(event.detail.success);
        this.showViewPage = true;
    }
}