const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const orderserviceNewOrderHandler = require('../handlers/orderservice-new-order');
module.exports = router;



router.use('orderservice/new/order', async (message, next) => {
  try {
    
    await validateMessage(message.payload,'orderservice/new/order','newOrderMessage','publish');
    await orderserviceNewOrderHandler.consumeNewOrder({message});
    next();
    
  } catch (e) {
    next(e);
  }
});
