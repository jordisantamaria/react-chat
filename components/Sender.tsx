import {css} from "@emotion/react";

export const Sender = () => {

  return (
    <div css={senderCss}>
        <button css={addReactionCss}>😃</button>
        <div css={newMessageCss}>
            <div
                css={editableTextCss}
                spellCheck
                role={"textbox"}
                contentEditable
                placeholder={'Type a message...'}
            />
        </div>
        <button css={sendButtonCss}>
            <img src={'/send-2.svg'} css={sendIconCss} />
        </button>
    </div>
  )

}

const senderCss = css`
  align-items: flex-end;
  background-color: #f4f7f9;
  border-radius: 0 0 10px 10px;
  display: flex;
  height: max-content;
  max-height: 95px;
  min-height: 45px;
  overflow: hidden;
  padding: 10px;
  position: relative;
`
const addReactionCss = css`
  background: #f4f7f9;
  border: 0;
  cursor: pointer;
  font-size: 24px;
    `
const newMessageCss = css`
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 10px 5px;
  resize: none;
  width: calc(100% - 75px);
`

const editableTextCss = css`
  display: block;
  height: 100%;
  line-height: 20px;
  max-height: 78px;
  overflow-y: auto;
  user-select: text;
  white-space: pre-wrap;
  word-wrap: break-word;
  
  &[contenteditable] {
    outline: 0px solid transparent;
  }
  &[placeholder]:empty:before {
    content: attr(placeholder);
    color: grey;
  }
`
const sendButtonCss = css`
  background: #f4f7f9;
  border: 0;
  cursor: pointer;
`

const sendIconCss = css`
  height: 25px;
`
