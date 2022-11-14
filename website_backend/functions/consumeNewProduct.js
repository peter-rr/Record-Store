import { channels } from "../lifecycle/logOnConnect";

export default async function (event) {  
  // Do something with consumeNewProduct event  
  const messageFormatted = JSON.stringify(event.payload);
  console.log(`New product created: ${messageFormatted}.`);

  // Send a new message to the broker
  console.log("Processing new order...");
  console.log(`New order placed: ${messageFormatted}.`);
  return {
      send: [{
        payload: event.payload,
        channel: 'orderservice/new/order' 
      }]
    }
  }