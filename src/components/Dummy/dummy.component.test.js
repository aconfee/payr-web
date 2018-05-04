import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Dummy from './dummy.component.js';

describe('<Dummy />', () => {

  it('renders without crashing', () => {
    const app = shallow(<Dummy />);
    const messageView = app.find('p');

    assert.isDefined(messageView);
    assert.isNotNull(messageView);
    assert.equal(messageView.length, 1);
  });

  it('renders blank state (no props)', () => {
    const app = shallow(<Dummy />);
    const messageView = app.find('p');

    assert.isDefined(messageView);
    assert.isNotNull(messageView);
    assert.equal(messageView.length, 1);
    assert.equal(messageView.text(), 'No data.');
  });

  it('renders blank state (no message)', () => {
    const data = {};
    const app = shallow(<Dummy dummy={data} />);
    const messageView = app.find('p');

    assert.isDefined(messageView);
    assert.isNotNull(messageView);
    assert.equal(messageView.length, 1);
    assert.equal(messageView.text(), 'No message.');
  });

  it('renders the correct message', () => {
    const data = { message: 'Test Message' };
    const dummy = shallow(<Dummy dummy={data} />);
    const messageView = dummy.find('p');

    assert.isDefined(messageView);
    assert.isNotNull(messageView);
    assert.equal(messageView.length, 1);
    assert.equal(messageView.text(), data.message);
  });

});
