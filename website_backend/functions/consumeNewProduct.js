import { channels } from "../lifecycle/logOnConnect";

export default async function (event) {  
  // Do something with consumeNewProduct event  
  const messageFormatted = JSON.stringify(event.payload);
  console.log(`New product created!: ${messageFormatted}.`);

  // Send a new message to the broker
  /* return {
      send: [{
        payload: `New product created!  "${event.payload}".`,
        channel: 'To which channel I want to send this message payload to' 
      },
      {
        payload: `New product created!  "${event.payload}".`,
        channel: 'To which channel I want to send this message payload to' 
      }]
    } */
  }
  