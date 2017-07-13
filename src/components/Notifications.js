import React from 'react';
import PropTypes from 'prop-types';
import bellWhite from '../assets/bell_white.svg';
import bellDark from '../assets/bell_dark.svg';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledNotifications = styled.div`
  background-image: ${({ active }) => active ? `url(${bellWhite})` : `url(${bellDark})`};
  background-color: ${({ active }) => active ? colors.blue : colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  border-radius: 5px;
  border: 1px solid ${colors.lineColour};
  width: 34px;
  height: 28px;
`;

const StyledRelative = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

`;

const StyledCounter = styled.div`
  height: 15px;
  width: 15px;
  line-height: 1;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  bottom: -5px;
  background: ${colors.orange};
  color: ${colors.white};
`;

const Notifications = ({ acknowledged, ...otherProps }) => (
  <StyledRelative>
    <StyledNotifications active={!!acknowledged} {...otherProps} />
    {!!acknowledged && <StyledCounter>{acknowledged}</StyledCounter>}
  </StyledRelative>
);

Notifications.propTypes = {
  acknowledged: PropTypes.bool.isRequired
}

export default Notifications;
