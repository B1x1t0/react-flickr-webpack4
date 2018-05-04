import React from 'react';
import Photo from '../../../../src/components/Gallery/Photo/Photo';
import {configure, shallow} from 'enzyme';
import photo from './photo.mock';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe("Photo Component", () => {
  it("should render a Photo Component", () => {
    const wrapper = shallow(<Photo key="1" 
        image={photo}/>);
  });
});

 