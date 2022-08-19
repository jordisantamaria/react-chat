import { css } from "@emotion/react"
import { Header } from "./Header"
import { Messages } from "./Messages"
import { Sender } from "./Sender"

export const Chat = () => {

  return (
    <div css={chatCss}>
      <Header/>
      <Messages/>
      <Sender/>
    </div>
  )
}

const chatCss = css({
  background: 'red'

})
