import React from 'react';
import {shallow} from 'enzyme';
import <%= name %> from 'app/components/<%= fileName %>';

describe('<%= name %>', function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it('renders', function() {
    let wrapper = shallow(<<%= name %> />);
    expect(wrapper).toMatchSnapshot();
  });
});
