export default async function ({ glee, serverName, server, connection }) {
  console.log('Connection with mqtt server established');
}

export const lifecycleEvent = 'onServerConnectionOpen';
export const servers = ['mqtt://localhost:1883'];
export const channels = ['/management/new/product', '/orderservice/new/order'];
