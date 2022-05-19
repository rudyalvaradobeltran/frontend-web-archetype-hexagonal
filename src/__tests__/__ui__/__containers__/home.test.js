import React from 'react';
import { create } from 'react-test-renderer';

// Mocks
import MockProvider from '../../../__mocks__/mockProvider';
// Components
import Home from '../../../ui/containers/Home/Home';

describe('HOME CONTAINER', () => {
  it('Should render snapshot without crashing', () => {
    const wrapper = create(
      <MockProvider>
        <Home />
      </MockProvider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
