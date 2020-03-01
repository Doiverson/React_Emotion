/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import Emotion from './Emotion';
import { Container, Button ,ButtonPink, ButtonGreen } from './Button';
import { Fancy, H1 } from './Text';
import BouncingText from './BouncingText';


export default class Main extends React.Component {

    state = {
        toggle: false
    };

    onClick = () => {
      this.setState(prevState => (
          {
              ...prevState,
              toggle: !prevState.toggle
          }
      ))
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Direction Change</button>
                <Container column={this.state.toggle === true ? 'column' : ''}>
                    <Emotion/>
                    <ButtonPink>
                        <span role="img" aria-label="emotion logo">👩🏼‍🎤</span>
                    </ButtonPink>
                    <ButtonGreen>
                        <span role="img" aria-label="emotion logo">🧑‍🎤</span>
                    </ButtonGreen>
                    <Button turquoise>
                        HELLO!!
                    </Button>
                </Container>
                <H1 color="purple" backgroundColor="#63d294">Vancouver</H1>
                <div css={css`
                    animation: ${BouncingText} 1s ease infinite
                `}>
                    <Fancy>
                        Canada
                    </Fancy>
                </div>
            </div>
        );
    }
}
