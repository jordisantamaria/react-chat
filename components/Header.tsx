import {css} from "@emotion/react";

export const Header = () => {

  return (
    <div css={headerCss}>
      header
    </div>
  )

}

const headerCss = css`
  border-radius: 0;
  flex-shrink: 0;
  position: relative;
  background-color: #35cce6;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px 0 25px;
}
   `
