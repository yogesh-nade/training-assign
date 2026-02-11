// Question 5: Class component that displays a label and a button
// The label's textcolor is green and backgroundcolor is yellow
// On button click change the textcolor and backgroundcolor using style attribute

'use client';

import { Component } from 'react';

interface StyledButtonState {
  textColor: string;
  backgroundColor: string;
}

export default class StyledButton extends Component<{}, StyledButtonState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      textColor: 'green',
      backgroundColor: 'yellow'
    };
  }

  handleButtonClick = () => {
    // Change colors to different values
    this.setState({
      textColor: this.state.textColor === 'green' ? 'blue' : 'green',
      backgroundColor: this.state.backgroundColor === 'yellow' ? 'pink' : 'yellow'
    });
  };

  render() {
    return (
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Styled Label Demo (Class Component)</h2>
        <div
          style={{
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor,
            padding: '20px',
            margin: '10px 0',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          This is a styled label
        </div>
        <br />
        <button
          onClick={this.handleButtonClick}
          style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
        >
          Change Colors
        </button>
      </div>
    );
  }
}
