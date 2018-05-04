import React from 'react';
import { shallow } from 'enzyme'; // Only test top level component. 
import { assert } from 'chai';
import { spy } from 'sinon';
import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const app = shallow(<App />);
    const mainView = app.find('.App');

    assert.isDefined(mainView);
    assert.isNotNull(mainView);
    assert.equal(mainView.length, 1);
  });

  it('renders the logo', () => {
    const app = shallow(<App />);
    const logo = app.find('.App-logo');

    assert.isDefined(logo);
    assert.isNotNull(logo);
    assert.equal(logo.length, 1);
  });

});
