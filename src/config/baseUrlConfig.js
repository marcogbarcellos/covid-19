const modes = new Map([['local', 'http://localhost:3031/graphql']]);

const websocketModes = new Map([['local', 'ws://localhost:3031/graphql']]);

export function getBaseUrl() {
  if (process.env.API_URL) {
    return process.env.API_URL;
  }
  return modes.get('local');
}

export function getWebsocketUrl() {
  if (process.env.WEBSOCKET_URL) {
    return process.env.WEBSOCKET_URL;
  }
  return websocketModes.get('local');
}
