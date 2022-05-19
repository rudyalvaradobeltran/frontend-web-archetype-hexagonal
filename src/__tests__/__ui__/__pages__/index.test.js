import React from 'react';
import { create } from 'react-test-renderer';

// Mocks
import MockProvider from '../../../__mocks__/mockProvider';
// Components
import App from '../../../ui/pages/';

describe('PAGES', () => {
  it('Should render snapshot without crashing', () => {
    const wrapper = create(
      <MockProvider>
        <App />
      </MockProvider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
