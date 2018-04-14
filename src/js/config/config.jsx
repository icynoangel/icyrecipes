const production = process.env.NODE_ENV === 'production' ? true : false;

let SERVICE_URL = '';

if (!production) {
  SERVICE_URL = 'http://localhost:3000';
} else {
  SERVICE_URL = 'http://localhost:3000';
}

var basePath = '/';

const config = {
  basePath: basePath,
  protocol: 'http',
  serviceUrl: SERVICE_URL,

  requestsTimeout: 20000, // 20 seconds

  getServerUrl() {
    return this.serviceUrl;
  },

  // GET
  items() {
    return `${this.serviceUrl}/items`;
  }
};

export default config;
