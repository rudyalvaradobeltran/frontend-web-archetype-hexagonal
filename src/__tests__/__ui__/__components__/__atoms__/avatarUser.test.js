import React from 'react';
import { create } from 'react-test-renderer';

// Mocks
import MockProvider from '../../../../__mocks__/mockProvider';

// Components
import AvatarUser from '../../../../ui/components/atoms/AvatarUser/AvatarUser';

describe('AVATAR USER', () => {
  const component = (children) => <MockProvider>{children}</MockProvider>;

  it('Should render correctly (snapshot) with default props', () => {
    const wrapper = create(component(<AvatarUser />));
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should renders correctly (snapshot) whit  props', () => {
    const wrapper = create(component(<AvatarUser name="Jhon Doe" phone="87745448" />));

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
