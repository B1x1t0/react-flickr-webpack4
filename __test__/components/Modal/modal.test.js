import React from 'react';
import Modal from '../../../src/components/Modal/Modal';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
const mockFn = jest.fn();

describe('Modal', () => {
 it('should be defined', () => {
   expect(Modal).toBeDefined();
 });
it('should render correctly', () => {
   const tree = shallow(
     <Modal />
   );
   expect(tree).toMatchSnapshot();
 });

 it('should call function when modal is clicked', () => {
    const tree = shallow(
      <Modal hide={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});