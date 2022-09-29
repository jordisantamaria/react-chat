import {css} from "@emotion/react";
import { ChatMessage } from "../store/messagesState";

interface Props {
  messages: ChatMessage[]
}
export const Messages = (props: Props) => {
    return (
      <div css={messagesCss}>
          {props.messages.map((msg, i) => (
              <div css={messageBoxCss} key={i}>
                  <img css={avatarCss} src={'favicon.ico'}/>
                  <div css={responseCss}>
                      <div css={messageTextCss}>
                        {msg.content}
                      </div>
                      <span css={timestampCss}>
                        {msg.date}
                      </span>
                  </div>
              </div>
          ))}
      </div>
  )

}

const messagesCss = css`
  background-color: #fff;
  overflow-y: scroll;
  padding-top: 10px;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  max-height: none;
    `
const messageBoxCss = css`
  margin: 10px;
  display: flex;
  white-space: pre-wrap;
  word-wrap: break-word;
    `

const avatarCss = css`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
   `

const responseCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    `
const messageTextCss = css`
  background-color: #f4f7f9;
  border-radius: 10px;
  max-width: 215px;
  padding: 15px;
  text-align: left;
    `
const timestampCss = css`
  font-size: 10px;
  margin-top: 5px;
    `
