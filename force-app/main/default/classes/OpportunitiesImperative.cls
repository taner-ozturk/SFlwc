public inherited sharing class OpportunitiesImperative {
    @AuraEnabled
    public static List<Opportunity> getOpportunities(){
        List<Opportunity> oppList = [
            SELECT Id, Name, StageName
            FROM Opportunity
        ];
        return oppList;
    }
}
