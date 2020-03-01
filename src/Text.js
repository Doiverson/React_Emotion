/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const Basic = ({ className }) => (
    <div className={className}>Some text</div>
);

export const Fancy = styled(Basic)`
  color: hotpink;
  font-size: 70px;
`;

export const H1 = styled.h1(
    {
        fontSize: 20
    },
    props => ({
        color: props.color,
        backgroundColor: props.backgroundColor
    })
);
