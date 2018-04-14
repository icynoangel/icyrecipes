import ajax from './../../src/js/services/ajax';
import * as superagent from 'superagent';
import config from './../../src/js/config/config';

jest.mock('superagent');

describe('Services - Ajax', function() {
  beforeEach(() => {
    this.url = 'http://testurl';
    this.data = {test: 'testdata'};
    this.headers = {key: 'value'};
  });

  it('Should call post related methods from Superagent', () => {
    ajax.post(this.url, this.data, this.headers);
    expect(superagent.post).toHaveBeenCalled();
    expect(superagent.post).toHaveBeenCalledWith(this.url);
    expect(superagent.set).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(superagent.set).toHaveBeenCalledWith('key', 'value');
    expect(superagent.send).toHaveBeenCalledWith(this.data);
    expect(superagent.timeout).toHaveBeenCalledWith(config.requestsTimeout);
    expect(superagent.end).toHaveBeenCalled();
  });

  it('Should call get related methods from Superagent', () => {
    ajax.get(this.url, this.headers);
    expect(superagent.get).toHaveBeenCalled();
    expect(superagent.get).toHaveBeenCalledWith(this.url);
    expect(superagent.set).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(superagent.set).toHaveBeenCalledWith('key', 'value');
    expect(superagent.timeout).toHaveBeenCalledWith(config.requestsTimeout);
    expect(superagent.end).toHaveBeenCalled();
  });

  it('Should call del related methods from Superagent', () => {
    ajax.del(this.url, this.headers);
    expect(superagent.del).toHaveBeenCalled();
    expect(superagent.del).toHaveBeenCalledWith(this.url);
    expect(superagent.set).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(superagent.set).toHaveBeenCalledWith('key', 'value');
    expect(superagent.timeout).toHaveBeenCalledWith(config.requestsTimeout);
    expect(superagent.end).toHaveBeenCalled();
  });

  it('Should call put related methods from Superagent', () => {
    ajax.put(this.url, this.data, this.headers);
    expect(superagent.put).toHaveBeenCalled();
    expect(superagent.put).toHaveBeenCalledWith(this.url);
    expect(superagent.set).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(superagent.set).toHaveBeenCalledWith('key', 'value');
    expect(superagent.send).toHaveBeenCalledWith(this.data);
    expect(superagent.timeout).toHaveBeenCalledWith(config.requestsTimeout);
    expect(superagent.end).toHaveBeenCalled();
  });
});
