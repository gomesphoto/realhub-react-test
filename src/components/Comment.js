import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { colors } from '../styles';

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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledComment = styled.div`
  border-bottom: 1px dashed ${colors.lineColour};
  height: 100px;
  margin: 10px;
  display: flex;
`;

const parseDate = date => {
  const values = date.split(/[\s/:]/g);
  return new Date(values[2], values[1], values[0], values[3], values[4]);
}


class Comment extends Component {
  state = {
    acknowledged: this.props.comment.acknowledged
  }
  toggleAcknowledged = () => {
    this.props.updateAcknowledged();
    this.setState({ acknowledged: !this.state.acknowledged });
  }
  render() {
    const { comment, ...otherProps } = this.props;
    return (
      <StyledComment key={comment.id} {...otherProps}>
        <StyledLeft>
          <StyledProfileImg src={comment.user.image.thumb_url} />
        </StyledLeft>
        <StyledRight>
          <StyledName>{`${comment.user.first_name} ${comment.user.last_name}`}</StyledName>
          <StyledBody>{comment.body}</StyledBody>
          <StyledTimestamp>
            {moment(parseDate(comment.dates.created.date_time)).fromNow()}
          </StyledTimestamp>
          {this.state.acknowledged &&
            <span>
              {' | '}
              <StyledMarkSeen onClick={this.toggleAcknowledged}>
                {'Mark as Seen'}
              </StyledMarkSeen>
            </span>
          }
        </StyledRight>
      </StyledComment>
    );
  }
}

Comment.propTypes ={
  comment: PropTypes.object.isRequired,
  updateAcknowledged: PropTypes.func.isRequired
}

export default Comment;
