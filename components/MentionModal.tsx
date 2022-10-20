import { css } from '@emotion/react'

const members = ['sorata', 'mashiro', 'nanami', 'akasaka', 'shiho', 'misaki']

export const MentionModal = () => {
  return (
    <div css={mentionModalCss}>
      {members.map((member) => (
        <div css={memberItemCss}>{member}</div>
      ))}
    </div>
  )
}

const mentionModalCss = css`
  position: fixed;
  width: 100%;
  top: 40px;
  background: white;
  overflow-y: scroll;
  z-index: 2;
`

const memberItemCss = css`
  padding: 16px;
  border-bottom: 1px solid;
`
