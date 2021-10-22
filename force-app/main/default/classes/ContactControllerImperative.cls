public inherited sharing class ContactControllerImperative {
    @AuraEnabled
    public static Contact upsertContact(
        String firstName, 
        String lastName, 
        String recordId
        ){
        Contact con = new Contact();
        con.Id = recordId;
        con.FirstName = firstName;
        con.LastName = lastName;
        upsert con;
        return con;
    }
}
