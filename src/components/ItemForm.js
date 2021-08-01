import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm(props) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  const handleOnSubmit = event => {
    event.preventDefault()
    props.onItemFormSubmit(formData)
    setFormData({name: "", category: "", id: ""})
  }
 
 
  return (
    
    <form className="NewItem" onSubmit={handleOnSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={event => setFormData({...formData, [event.target.name]: event.target.value})}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => setFormData({...formData, [event.target.name]: event.target.value})}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
