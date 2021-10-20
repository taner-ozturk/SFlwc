import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    

    
    connectedCallback() {
        let intVar = 10;
        let stringVar = "This is my first LWC component";
        let checkUncheck = true;

        let contact = {
            'firstName': 'Selcuk',
            'lastName': 'A'
        }

        let listIntegers = [10, 20, 30];

        let listContacts = [
            {
                'firstName': 'Adnan',
                'lastName': 'Ozb',
                'listOfContacts': [
                    {
                        'Session': 'Verbal Comas',
                        'Day': 'Tuesday'
                    }
                    
                ]
            },
            {
                'firstName': 'Vedat',
                'lastName': 'Ozc'
            }
        ]

        console.log('intVar=>', intVar);
        console.log('stringVar=>', stringVar);
        console.log('checkUncheck=>', checkUncheck)
        console.log('contact.firstName=>', contact.firstName);
        console.log('contact.lastName=>', contact.lastName);
        console.log('listIntegers=>', listIntegers);
        console.log('listContacts=>', listContacts);
        console.log('listContacts.listContacts[0]=>', listContacts[0].lastName);


    }
}