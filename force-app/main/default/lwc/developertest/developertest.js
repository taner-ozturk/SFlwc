import getAccounts from '@salesforce/apex/DeveloperTestApexController.getAccounts';
import { LightningElement, api, wire, track} from 'lwc';

export default class DeveloperTest extends LightningElement {
          
          @api flexipageRegionWidth;   

          @track
          accounts;
      
          @track
          error;
      
          handleLoad() {
              getAccounts()
                  .then(result => {
                      this.accounts = result;
                      this.error = undefined;
                  })
                  .catch(error => {
                      this.accounts = undefined;
                      this.error = error;
                  });
          }
}