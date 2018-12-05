import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ask from './Ask';
import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Ask Tests', () => {
  const result = {
    data: {
      positive: [
        {
          answer1: "Fo Sho!",
          answer2: "Yolo"
        }
      ],
    }
  };

  it.skip('stores data in local state', (done) => {
    const wrapper = mount(<Ask />);
    expect(wrapper.state().positive).toEqual([]);

    promise.then(() => {
      wrapper.update();

      expect(wrapper.state().positive).toEqual(result.data.positive);

      done();
    });
  });
})