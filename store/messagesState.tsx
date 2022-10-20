import { atom, selector } from 'recoil'

export interface ChatMessage {
  content: string
  date: string
}
export const messagesState = atom({
  key: 'messagesState', // unique ID (with respect to other atoms/selectors)
  default: [] as ChatMessage[],
})

export const getFormattedMessage = selector({
  key: 'getFormattedMessage', // unique ID (with respect to other atoms/selectors)
  get: ({ get }: any) => {
    const messages: ChatMessage[] = get(messagesState)

    return messages.map((msg) => `${msg.content} - ${msg.date}`)
  },
})
