({
    publishMessage : function(component, event, helper) {
        const payload = {
            detail:"This is published inside AURA",
            source:"sampleMessagePublisherAura"
        };
        component.find("sampleMessageChannelId").publish(payload);
    }
})
