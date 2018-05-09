const createStore = jest.fn( () => {
  return 'redux-store';
});

const applyMiddleware = jest.fn( (middleware) => {
  return 'redux-middleware';
});

export { 
  createStore,
  applyMiddleware
};
