import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledMenu = styled.div`
  position: absolute;
  transition: all 0.3s ease-in-out
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(15px)')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  border: 1px solid ${colors.lineColour};
  height: 300px;
  width: 300px;
  top: 40px;
  margin: 1px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const StyledButton = styled.div`
  background: ${colors.green};
  border: 1px solid ${colors.lineColour};
  padding: 8px;
  text-align: center;
  margin: 15px;
  border-radius: 5px;
  color: ${colors.white};
  &:hover {
    opacity: 0.8;
  }
`;

const Menu = ({ active, comments, updateAcknowledged, ...otherProps }) => (
  <StyledMenu active={active} {...otherProps}>
    {comments.map(comment => (
      <Comment comment={comment} updateAcknowledged={updateAcknowledged} />
    ))}
    <StyledButton>{'Mark as Approved'}</StyledButton>
  </StyledMenu>

)

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  updateAcknowledged: PropTypes.func.isRequired
}

export default Menu;
