import { useState } from "react";
import {useNavigate} from "react-router-dom";


function NewForm (props) {

  const navigate = useNavigate();
 
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

    // redirect
    navigate('/');
  };

    return (
      
      <div className="new-item">
            <form onSubmit={handleSubmit}>
              <label>What do you need gone?</label>
                <div className="form">
                Name:<input type="text" name="name" onChange={handleChange} value={newForm.name} placeholder="What are you selling?"/>
                Image:<input type="text" name="image" onChange={handleChange}  value={newForm.image} placeholder = "Image URL"/>
                Description:<input type="textarea" rows = "5" cols = "60" wrap="soft" placeholder="Tell me about your item!" name="description" onChange={handleChange} value={newForm.description} />
                Price:<input type="text" name="price"onChange = {handleChange} value = {newForm.price} placeholder = "how much?"/>  
                </div>

            <input type="submit" id="submitBtn"/>
            </form>
      </div>
    )
  }

  export default NewForm