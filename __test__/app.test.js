// test jest working 

import React from 'react';
import App from '../src/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe("App", () => {
  it("should render App", () => {
    const wrapper = shallow(<App />);
  });
});

describe('suma test', () => {
  it('should 1 and 1 make 2', () => {
    expect(1 + 1).toBe(2);
  });
});