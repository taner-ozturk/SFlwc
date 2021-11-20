public without sharing class DeveloperTestApexController {
        @AuraEnabled

        public static List<Account> getAccounts() {
    
            return [SELECT Id, name, Website  FROM Account limit 5 ];
    
        }
        
    }