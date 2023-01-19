import { useState } from "react";


function NewForm (props) {
 
  const formFields = {
    name : '',
    image : '',
    description: '',
    price: '',
  };
  const [newForm, setNewForm] = useState (formFields);
  const handleChange = (event) =>{
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.createRummage(newForm);
    setNewForm(formFields);
  };

    return (
      
      <div className="new-item">
          <article>
            <form onSubmit={handleSubmit}>
            <label>What do you need gone?</label>
                <div className="grid">
                Name:<input type="text" name="name" onChange={handleChange} value={newForm.name} placeholder="What are you selling?"/><br />
                Image:<input type="text" name="image" onChange={handleChange}  value={newForm.image} placeholder = "Upload your image"/><br />
                Description:<input type="text" name="Description" onChange={handleChange} value={newForm.Description}/><br />
                Price:<input type="text" name="Price"onChange = {handleChange} value = {newForm.Price} placeholder = "how much?"/><br />     
                </div>
                <input type="file" name="image" onChange={handleChange}  value={newForm.image} placeholder = "Upload your image"/><br />
                <button type="submit">Submit</button>
            </form>
          </article>
      </div>
    )
  }
  
  export default NewForm