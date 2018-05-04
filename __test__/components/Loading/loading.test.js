
import React from 'react';
import Loading from '../../../src/components/Loading/Loading';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Loading', () => {
 it('should be defined', () => {
   expect(Loading).toBeDefined();
 });
it('should render correctly', () => {
   const tree = shallow(
     <Loading />
   );
   // if image error: jest —-updateSnapshot
   expect(tree).toMatchSnapshot();
 });
});