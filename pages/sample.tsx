import React, { useState, useEffect } from 'react'

const useKeyPress = function (targetKey: any) {
  const [keyPressed, setKeyPressed] = useState(false)

  function downHandler({ key }: any) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: any) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}

const items = [
  { id: 1, name: 'Josh Weir' },
  { id: 2, name: 'Sarah Weir' },
  { id: 3, name: 'Alicia Weir' },
  { id: 4, name: 'Doo Weir' },
  { id: 5, name: 'Grooft Weir' },
]

const ListItem = ({ item, active, setSelected, setHovered }: any) => (
  <div
    className={`item ${active ? 'active' : ''}`}
    onClick={() => setSelected(item)}
    onMouseEnter={() => setHovered(item)}
    onMouseLeave={() => setHovered(undefined)}
  >
    {item.name}
  </div>
)

const Sample = () => {
  const [selected, setSelected] = useState<any>(undefined)
  const downPress = useKeyPress('ArrowDown')
  const upPress = useKeyPress('ArrowUp')
  const enterPress = useKeyPress('Enter')
  const [cursor, setCursor] = useState(0)
  const [hovered, setHovered] = useState(undefined)

  useEffect(() => {
    if (items.length && downPress) {
      setCursor((prevState) =>
        prevState < items.length - 1 ? prevState + 1 : prevState,
      )
    }
  }, [downPress])
  useEffect(() => {
    if (items.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [upPress])
  useEffect(() => {
    if (items.length && enterPress) {
      setSelected(items[cursor] as any)
    }
  }, [cursor, enterPress])
  useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered))
    }
  }, [hovered])

  return (
    <div>
      <p>
        <small>
          Use up down keys and hit enter to select, or use the mouse
        </small>
      </p>
      <span>Selected: {selected ? selected.name : 'none'}</span>
      {items.map((item, i) => (
        <ListItem
          key={item.id}
          active={i === cursor}
          item={item}
          setSelected={setSelected}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}

export default Sample
