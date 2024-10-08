import { useState } from "react"
import { nanoid } from "nanoid"

function SetEntry() {

  const [entry, setEntry] = useState({
    id: nanoid(),
    title: "",
    entry: "",
    category: "",
  })

  function handleChange(event) {
      const {name, value} = event.target
      setEntry(prevEntry => ({
        ...prevEntry,
        [name] : value
      }));
  }


  return (
    <main className="set-entry">
      <h1>Introducir Entrada</h1>
      <form action="">

      <input 
      type="text"
      id="title"
      name="title"
      value={entry.title}
      onChange={handleChange}
      />

      <label htmlFor="category-select">Select a category: </label>
      <select 
      name="category" 
      id="category-select"
      value={entry.category}
      onChange={handleChange}
      >
        <option value="Health">Health</option>
        <option value="Coding">Coding</option>
        <option value="Life Experiences">Life Experiences</option>
      </select>

      <label htmlFor="entry">Entry: </label>
      <textarea 
      name="entry" 
      id="entry"
      className="input"
      value={entry.entry}
      onChange={handleChange}
      />

      <button type="submit" className="send-entry">Enviar entrada</button>
      </form>
    </main>
  )
}

export default SetEntry