import React from 'react';
import PropTypes from 'prop-types';

import AvatarUser from '../../atoms/AvatarUser/AvatarUser';

import { Wrapper, UsersGrid } from './styles';

const HomeTemplate = ({ users }) => (
  <Wrapper>
    {users.length > 0 && (
      <UsersGrid>
        {users.map((u) => (
          <AvatarUser key={u.id} name={u.name} phone={u.phone} />
        ))}
      </UsersGrid>
    )}
  </Wrapper>
);

HomeTemplate.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, phone: PropTypes.string })),
};
HomeTemplate.defaultProps = { users: [] };

export default HomeTemplate;
