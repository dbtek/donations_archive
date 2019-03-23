import React, { Component } from 'react'
import styled from 'styled-components'
import NewWindow from 'react-new-window'

const Button = styled.button`
  display: inline-block;
  padding: 1rem 4rem;
  margin: 1rem;
  background: #ff867c;
  color: white;
  border-radius: 3rem;
  font-size: 20px;
  font-weight: 600;
  border: none;
  box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.2);
  &:hover {
    background: #ef5350;
    cursor: pointer;
  }
`;

export default class DonateButton extends Component {
  state = {
    winOpened: false
  }
  
  handleClick = () => {
    this.setState({ winOpened: true });
  }

  handleClose = () => {
    this.setState({ winOpened: false });
  }

  render () {
    const { winOpened } = this.state;

    return (
      <div>
        {winOpened && (
          <NewWindow
            title="Donate with PayPal"
            center="parent"
            onUnload={this.handleClose}
            features={{ height: 600, width: 800}}
          >
            <form
              action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"
              style={{ textAlign: 'center', paddingTop: 200, backgroundColor: '#282c34', height: '100vh' }}
            >
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="ce.demirbilek@gmail.com" />
              <input type="hidden" name="item_name" value="Support our non profit projects" />
              <input type="hidden" name="currency_code" value="USD" />
              <Button type="submit">
                Proceed to PayPal
              </Button>
            </form>
          </NewWindow>
        )}
        <Button onClick={this.handleClick}>
          DONATE
        </Button>
      </div>
    );
  }
}
