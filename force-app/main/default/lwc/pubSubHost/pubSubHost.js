import { LightningElement } from 'lwc';
var callbacks = {};
const register = (eventName, callback) => {
    if (!callbacks[eventName]) {
        callbacks[eventName] = new Set(); //initilizes 'btnclick' as a set; now this set will hold set of methods that should be invoked when btnclick is fired
    }
    callbacks[eventName].add(callback);
    //callbacks['btnclick'].add(123.handleclick);
    //callbacks['btnclick'].add(456.handleclick);
};
const fire = (eventName, payload) => {
    if (callbacks[eventName]) {
        // for (let i = 0; i < callbacks[eventName].length; i++){
        //     let callback = callbacks[eventName][i];
        //     callback(payload);
        //     //123.handleclick(payload);
        //     //456.handleclick(payload);
        // }
        callbacks[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.log(JSON.stringify(error));
            }
            //123.handleclick(payload);
            //456.handleclick(payload);
        });
    }
};
export default { register, fire };