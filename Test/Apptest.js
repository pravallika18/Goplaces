import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../component/App';

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<App />);
    expect(App).toExist();
  });
});