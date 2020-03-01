/** @jsx jsx */

import { css, jsx } from "@emotion/core";

const color = 'white';

function Emotion() {
    return (
        <div
            css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      text-align: center;
      &:hover {
        color: ${color};
      }
    `}
        >
            Hover to change color.
        </div>
    );
}

export default Emotion;
