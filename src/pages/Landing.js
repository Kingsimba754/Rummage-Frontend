import { useState } from "react"
import { Link } from "react-router-dom"


function Landing (props){
  const formFields = {
    name : '',
    image : '',
    Description: '',
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
  const loaded = () =>{
    return props.rummage.map(things =>(
      <div key = {things._id}>
        <Link to = {`/Rummage/${things._id}`}>
          <h1>{things.name}</h1>
        </Link>
      </div>
    ));  
  };
  const loading = () => {
    return <h1>Rummage through our things</h1>
  };
  return (
    <section>
    <form onSubmit={handleSubmit}>
        Name:<input 
            type="text" 
            name="name" 
            onChange={handleChange} 
            value={newForm.name} 
        /><br />
        Title:<input 
            type="text" 
            name="title" 
            onChange={handleChange} 
            value={newForm.title} 
        /><br />
        Image:<input 
            type="text" 
            name="image" 
            onChange={handleChange} 
            value={newForm.image} 
        /><br />
        <input type="submit" value="Add Person" />
    </form>
    { props.people ? loaded() : loading() }
</section>
  )
}

export default Landing