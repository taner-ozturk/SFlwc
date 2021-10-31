({
    handleMessage : function(component, event, helper) {
        if (event != null && event.getParams != null) {
            let params = event.getParams();
            component.set("v.payload", JSON.stringify(params));
        }
    },
    publishMessage: function (component, event, helper) {
        const payload = {
            detail:"This is published inside AURA from subscriber itself",
            source:"sampleMessageSubscriberAura"
        };
        component.find("sampleMessageSubscriberId").publish(payload);
    }
})