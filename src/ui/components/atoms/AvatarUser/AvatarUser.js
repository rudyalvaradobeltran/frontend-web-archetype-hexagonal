import React from 'react';
import PropTypes from 'prop-types';

import StyledAvatar from './styles';

const AvatarUser = ({ name, phone }) => (
  <StyledAvatar>
    <img src="https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png" alt="avatar_img " />
    <p>{name}</p>
    <p>{phone}</p>
  </StyledAvatar>
);

AvatarUser.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
AvatarUser.defaultProps = { name: '', phone: '' };

export default AvatarUser;
