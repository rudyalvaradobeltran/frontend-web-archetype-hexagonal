import React from 'react';
import { create } from 'react-test-renderer';

// Mocks
import MockProvider from '../../../../__mocks__/mockProvider';
// Components
import HomeTemplate from '../../../../ui/components/templates/HomeTemplate/HomeTemplate';

describe('HOME TEMPLATE', () => {
  const component = (children) => <MockProvider>{children}</MockProvider>;

  it('Should render correctly (snapshot) with default props', () => {
    const wrapper = create(component(<HomeTemplate />));
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should renders correctly (snapshot) whit  props', () => {
    const wrapper = create(
      component(<HomeTemplate users={[{ id: 1, name: 'Jhon Doe', phone: '8875547' }]} />)
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
