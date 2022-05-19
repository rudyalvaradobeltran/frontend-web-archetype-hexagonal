import React from 'react';
import { create } from 'react-test-renderer';

// Mocks
import MockProvider from '../../../__mocks__/mockProvider';
// Components
import PrivateRouter from '../../../ui/hoc/PrivateRouter';

describe('PrivateRouter', () => {
  const Component = () => <div>home</div>;

  it('Should renders correctly (Snapshot)', () => {
    const wrapper = create(
      <MockProvider initialEntries="/home">
        <PrivateRouter path="/home">
          <Component />
        </PrivateRouter>
      </MockProvider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should renders correctly (Snapshot) children when token is present in localStorage', () => {
    window.localStorage.setItem('token', 'secret-token');
    
    const wrapper = create(
      <MockProvider initialEntries="/home">
        <PrivateRouter path="/home">
          <Component />
        </PrivateRouter>
      </MockProvider>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
