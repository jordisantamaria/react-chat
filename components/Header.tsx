import { css } from '@emotion/react'

export const Header = () => {
  return <div css={headerCss}>React Chat</div>
}

const headerCss = css`
  border-radius: 0;
  flex-shrink: 0;
  position: relative;
  font-weight: bold;
  font-size: 20px;
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0;
}
   `
