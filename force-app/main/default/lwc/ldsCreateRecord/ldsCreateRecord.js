import { LightningElement, wire, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
export default class LdsCreateRecord extends LightningElement {
    name;
    stageName;
    closeDate;
    @track stageOptions;
    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: STAGE_NAME })
    stageNamePicklistInfo({ error, data }) {
        if (data) {
            console.log('Data : ', JSON.stringify(data));
            this.stageOptions = [];
            for (let i = 0; i < data.values.length; i++){
                let stage = data.values[i];
                this.stageOptions.push({label: stage.label, value: stage.value});
            }
        } else if (error) {
            console.log('error : ', JSON.stringify(error));
        }
    }
    handleNameChange(event) {
        this.name = event.detail.value;
    }
    handleStageNameChange(event) {
        this.stageName = event.detail.value;
    }
    handleCloseDateChange(event) {
        this.closeDate = event.detail.value;
    }
    handleCreateOpp(event) {
        //external API hitting SF
        //it provides field values=> integrationRecord
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name; //integrationRecord.name
        fields[STAGE_NAME.fieldApiName] = this.stageName; //integrationRecord.stageName
        fields[CLOSE_DATE.fieldApiName] = this.closeDate; //integrationRecord.closeDate
        const oppRecord = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };
        createRecord(oppRecord)
            .then(opportunityRecord => {
                console.log('opportunityRecord: ', JSON.stringify(opportunityRecord));
                alert('Opportunity created with Id: ', opportunityRecord.id);
            })
            .catch(error => {
                alert('Creation failed');
                console.log('Error: ', JSON.stringify(error));
            })
    }
}