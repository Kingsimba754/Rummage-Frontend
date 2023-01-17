
const NewForm = (props) => {

    return (
      
      <div className="new-item">
          <article>
            <form>
            <label>What do you need gone?</label>
                <div className="grid">
                        <input type="text" id="item" name="item-name" placeholder="What do you call it?" required/>
                        <input type="text" id="item" name="item-name" placeholder="What do you call it?" required/>
                </div>
                    <input type="textarea" id="price" name="price-name" placeholder="What do you want for it?" required/>
                <button type="submit">Submit</button>
            </form>
          </article>
      </div>
    )
  }
  
  export default NewForm