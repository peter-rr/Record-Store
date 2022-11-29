
const handler = module.exports = {};

/**
 * 
 * @param {object} options
 * @param {object} options.message
 */
handler.consumeNewOrder = async ({message}) => {
  // Do something with consumeNewOrder event
  const messageFormatted_3 = JSON.stringify(message.payload);
  console.log(`New order placed: ${messageFormatted_3}.`);
};
