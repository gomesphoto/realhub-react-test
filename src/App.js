import React, { Component } from 'react';
import styled from 'styled-components';
import Notifications from './components/Notifications';
import Menu from './components/Menu';
import Comments from './assets/comment_data.json';
import { colors } from './styles';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledMenu = styled.div`
  border-top: 1px solid ${colors.lineColour};
  border-bottom: 1px solid ${colors.lineColour};
  width: 100%;
  height: 35px;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const getAcknowledgedComments = comments => {
  const filtered = comments.filter(comment => comment.acknowledged)
  return filtered.length;
}

class App extends Component {
  state = {
    acknowledged: getAcknowledgedComments(Comments),
    toggle: false
  }

  updateAcknowledged = () =>
    this.setState({ acknowledged: this.state.acknowledged - 1 })

  toggleMenu = () =>
    this.setState({ toggle: !this.state.toggle });

  render = () => (
    <StyledWrapper>
      <StyledMenu>
        <Notifications acknowledged={this.state.acknowledged} onClick={this.toggleMenu} />
        <Menu
          active={this.state.toggle}
          comments={Comments}
          updateAcknowledged={this.updateAcknowledged}
        />
      </StyledMenu>
    </StyledWrapper>
  );
}


export default App;
