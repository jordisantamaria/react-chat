import { css } from '@emotion/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  ChatMessage,
  getFormattedMessage,
  messagesState,
} from '../store/messagesState'
import { Header } from './Header'
import { Messages } from './Messages'
import { Sender } from './Sender'

export const Chat = () => {
  const [messages, sendMessages] = useRecoilState(messagesState)
  const messagesFormated = useRecoilValue(getFormattedMessage)

  console.log('messageFormated = ', messagesFormated)

  const handleSendMessage = (msg: ChatMessage) => {
    sendMessages([...messages, msg])
  }

  return (
    <div css={chatCss}>
      <div css={containerCss}>
        <Header />
        <Messages messages={messages} />
        <Sender onSend={handleSendMessage} />
      </div>
    </div>
  )
}

const chatCss = css`
  height: 100vh;
  margin: 0;
  max-width: none;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  z-index: 9999;
`

const containerCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 2px 10px 1px #b5b5b5;
  min-width: 370px;
  max-width: 90vw;
  position: relative;
`
