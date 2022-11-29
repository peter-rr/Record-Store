export default async function ({ glee, serverName, server, connection }) {
  console.log('Connection with mqtt broker established');
  return {}
}

export const lifecycleEvent = 'onConnect';
export const servers = ['development'];
// export const channels = ['/management/new/product'];
