const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    console.log("Successful connection!");
})

client.on('reconnect', function () {
    console.log("Reconnection started!");
})

client.on('close', function () {
    console.log("Client disconnected!");
})

client.on('disconnect', function () {
    console.log("Disconnect packet received!");
})

client.on('error', function (error) {
    console.log(error);
    console.log("Client cannot connect!");
})

client.on('connect', function () {
    const message = {
        product_id: 01,
        product_title: "Nice record",
        product_type: "record",
        product_creation_timestamp: "2018-11-13T20:20:39+00:00"
    }
    const messageFormatted = JSON.stringify(message);
    client.publish('management/new/product', messageFormatted);
    console.log(messageFormatted);
    client.end();
})
