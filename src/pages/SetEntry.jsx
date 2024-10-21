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

    async function sendEntry(event) {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:3001/saveEntry`, {

        method: 'POST',
        headers : {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(entry)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.text();
      console.log(data)

      handleChange({target: {name: 'id', value: ''}})
      handleChange({target: {name: 'title', value: ''}})
      handleChange({target: {name: 'entry', value: ''}})
      handleChange({target: {name: 'category', value: ''}})
    } catch (err) {
      console.log('Error during fetch', err)
    }
  }


  return (
    <main className="set-entry">
      <h1>Introducir Entrada</h1>
      <form onSubmit={sendEntry}>

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
        <option value="select">Select a category</option>
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
      <div className="home-content">

      </div>
    </main>
  )
}

export default SetEntry