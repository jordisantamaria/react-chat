import {css} from "@emotion/react";
import {useRef} from "react";
import { ChatMessage } from "../store/messagesState";

interface Props {
    onSend: (message: ChatMessage) => void
}

export const Sender = (props: Props) => {

    const editableTextRef: any = useRef(null)

    function moveCaret(win: any, charCount: number) {
        var sel, range;
        if (win.getSelection) {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var textNode = sel.focusNode;
                var newOffset = sel.focusOffset + charCount;
                sel.collapse(textNode, Math.min(textNode.length, newOffset));
            }
        } else if ( (sel = win.document.selection) ) {
            if (sel.type != "Control") {
                range = sel.createRange();
                range.move("character", charCount);
                range.select();
            }
        }
    }

    const handleAddEmoji = (e: any) => {
        e.preventDefault()
        console.log('selection = ', editableTextRef)
        console.log('add emoji ', editableTextRef)
        // document.execCommand('insertImage', true, '/send-2.svg')
        const img = document.createElement('img');
        img.src = '/send-2.svg'
        img.alt = ':send:'
        editableTextRef.current.appendChild(img)

        const sel = window.getSelection()
        console.log('selection = ', sel)
        console.log('selection rangeCount = ', sel!.getRangeAt(0))
        editableTextRef.current.focus()
        moveCaret(window, 10)

    }
    const handleSend = () => {
        console.log(editableTextRef.current.innerText)
        props.onSend({content: editableTextRef.current.innerText, date: new Date().toISOString()})
        editableTextRef.current.innerText = ""
    }
  return (
    <div css={senderCss}>
        <button onClick={handleAddEmoji} css={addReactionCss}>😃</button>
        <div css={newMessageCss}>
            <div
                ref={editableTextRef}
                css={editableTextCss}
                spellCheck
                role={"textbox"}
                contentEditable
                placeholder={'Type a message...'}
            />
        </div>
        <button css={sendButtonCss} onClick={handleSend}>
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
  & img {
    width: 16px;
    height: 16px;
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
