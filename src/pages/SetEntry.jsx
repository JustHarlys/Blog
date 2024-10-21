import { useState } from "react";
import { nanoid } from "nanoid";

function SetEntry() {
  const [entry, setEntry] = useState({
    id: nanoid(),
    title: "",
    entry: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  }

  async function sendEntry(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/saveEntry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      console.log(data);

      handleChange({ target: { name: "id", value: "" } });
      handleChange({ target: { name: "title", value: "" } });
      handleChange({ target: { name: "entry", value: "" } });
      handleChange({ target: { name: "category", value: "" } });
    } catch (err) {
      console.log("Error during fetch", err);
    }
  }

  return (
    <main className="set-entry">
      <h1>Introducir Entrada</h1>
      <form onSubmit={sendEntry}>

        <label htmlFor="Title">Title</label>
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
          <option value="Salud">Salud</option>
          <option value="Programación">Programación</option>
          <option value="Experiencias">Experiencias</option>
        </select>

        <label htmlFor="entry">Entry: </label>
        <textarea
          name="entry" 
          id="entry"
          className="input"
          value={entry.entry}
          onChange={handleChange}
        />

        <button type="submit" className="send-entry">
          Enviar entrada
        </button>
      </form>
    </main>
  );
}

export default SetEntry;
