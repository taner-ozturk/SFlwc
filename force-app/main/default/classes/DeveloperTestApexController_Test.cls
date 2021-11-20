@isTest
public without sharing class DeveloperTestApexController_Test {
    
    static testMethod void testGreenFlow() {
        List<Account> lstAccount = DeveloperTestApexController.getAccounts();
        System.assertEquals(5, lstAccount.size(), 'Given many accounts, when getAccountList is called, it should only return 5');
    }
    
    static testMethod void testTheException() {
        Boolean exceptionCaught = false;
        try {} 
        catch(Exception err) {
            exceptionCaught = true;
        }
        System.assert(exceptionCaught, 'Given getAccountList throws an exception, then the exception is handled');
    }
    
}