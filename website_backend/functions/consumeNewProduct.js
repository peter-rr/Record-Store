
export default async function (event) {  
  // Do something with consumeNewProduct event  
  const messageFormatted = JSON.stringify(event.payload);
  console.log(`New product created: ${messageFormatted}.`);

  const new_order_message = { ...event.payload };
  new_order_message.order_timestamp = event.payload.product_creation_timestamp;
  delete new_order_message.product_creation_timestamp;
  const messageFormatted_2 = JSON.stringify(new_order_message);


/*   const new_order_message  = 
    (({ product_id, product_title, product_type, product_creation_timestamp }) => ({ product_id, product_title, product_type, order_timestamp: product_creation_timestamp }))(event.payload); 
    function Test({…}) { return {…}; } Test(event.payload);
 */

  // Send a new message to the broker (produceNewOrder event)
  console.log("Processing new order...");
  console.log(`New order placed: ${messageFormatted_2}.`);
  return {
      send: [{
        payload: new_order_message,
        channel: 'orderservice/new/order' 
      }]
    }
  }