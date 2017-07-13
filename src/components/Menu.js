import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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

const StyledLeft = styled.div`
  width: 15%;
`;

const StyledRight = styled.div`
  padding-left: 10px;
  width: 80%;
`

const StyledProfileImg = styled.img`
  width: 90%;
  border-radius: 50%;
`;

const StyledName = styled.div`
  color: ${colors.blue};
`;

const StyledBody = styled.div`
  color: ${colors.dark};
  margin: 5px 0;
`;

const StyledTimestamp = styled.span`
  color: ${colors.light};
`;

const StyledMarkSeen = styled.span`
  color: ${colors.orange};
`

const StyledComment = styled.div`
  border-bottom: 1px dashed ${colors.lineColour};
  height: 100px;
  margin: 10px;
  display: flex;
`

const parseDate = date => {
  const values = date.split(/[\s/:]/g);
  return new Date(values[2], values[1], values[0], values[3], values[4]);
}

const renderComments = comments =>
  comments.map(comment => (
    <StyledComment key={comment.id}>
      <StyledLeft>
        <StyledProfileImg src={comment.user.image.thumb_url} />
      </StyledLeft>
      <StyledRight>
        <StyledName>{`${comment.user.first_name} ${comment.user.last_name}`}</StyledName>
        <StyledBody>{comment.body}</StyledBody>
        <StyledTimestamp>
          {moment(parseDate(comment.dates.created.date_time)).fromNow()}
        </StyledTimestamp>
        {comment.acknowledged &&
          <span>
            {' | '}
            <StyledMarkSeen>{'Mark as seen'}</StyledMarkSeen>
          </span>
        }
      </StyledRight>
    </StyledComment>
  ))

const Menu = ({ active, comments, ...props }) => (
  <StyledMenu active={active} {...props}>
    {renderComments(comments)}
  </StyledMenu>

)

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired
}

export default Menu;
