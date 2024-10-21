import { useState } from "react"


function Categories({ entriesItems, setEntries, filter, original }) {

  const [selected, setSelected] = useState('')

  const handleCategoryClick = (val) => {
    setSelected(val)
    filter(val)
  }

  return (

    <>
    <div className="categories">
      {entriesItems.map((val, id) => {
        return (
          <button className={`category-btn ${selected === val ? 'selected': ''}`} 
          onClick={() => handleCategoryClick(val)}
          key={id}
          
          >
            {val}
          </button>
        )
      })}
      <button className={`category-btn ${selected === '' ? 'selected' : ''}`} 
      onClick={() => {
        setEntries(original)
        setSelected('');
        }}>
        All
      </button>
    </div>
    </>
  )
}

export default Categories