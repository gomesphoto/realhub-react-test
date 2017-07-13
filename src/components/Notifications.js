import React from 'react';
import PropTypes from 'prop-types';
import bellWhite from '../assets/bell_white.svg';
import bellDark from '../assets/bell_dark.svg';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledNotifcations = styled.div`
  background-image: ${({ active }) => active ? `url(${bellWhite})` : `url(${bellDark})`};
  background-color: ${({ active }) => active ? colors.blue : colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  border-radius: 5px;
  border: 1px solid ${colors.lineColour};
  width: 34px;
  height: 28px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Notifications = ({ active, ...otherProps }) =>
  <StyledNotifcations active={active} {...otherProps} />

Notifications.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Notifications;
