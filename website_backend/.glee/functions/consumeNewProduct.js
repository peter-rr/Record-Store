var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        // Do something with consumeNewProduct event  
        const messageFormatted = JSON.stringify(event.payload);
        console.log(`New product created: ${messageFormatted}.`);
        const new_order_message = Object.assign({}, event.payload);
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
        };
    });
}
