/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

export const ButtonPink = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 60px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
    color: white;
    }
`;

export const ButtonGreen = props => (
    <ButtonPink
        css={{
            backgroundColor: 'green'
        }}
        {...props}
    />
);

export const Button = styled.button`
  color: ${props => (props.turquoise ? 'turquoise' : 'hotpink')}
`;

export const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
}));

