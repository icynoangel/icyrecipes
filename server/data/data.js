
const url = 'http://localhost:3000';

const responseSuccess = {
  "items": [{
    "itemImage": url + "/boat.jpg",
    "itemTitle": "Boat",
    "itemDescription": "Lonely boat"
  },
  {
    "itemImage": url + "/rain.jpg",
    "itemTitle": "Rain",
    "itemDescription": "Sunset rain"
  },
  {
    "itemImage": url + "/lake.jpg",
    "itemTitle": "Lake",
    "itemDescription": "Nice lake"
  }]
};

const responseError = {
  "error": {
    "code": "server error",
    "message": "We encountered an error. Please try again later."
  }
};

module.exports = {
  responses: {
    method: 'GET',
    endpoint: '/items',
    errorEndpoint: '/itemserror',
    success: responseSuccess,
    error: responseError
  }
};