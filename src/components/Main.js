import Index from '../pages/Index'
import Card from './Card'
import NewForm from './NewForm'

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-wrap">
      <div className="welcome">
        <span className="big">Welcome to Rummage!</span> A place to rid yourself of unwanted things, pick up cool stuff for cheap, or browse for things you didn't know you wanted/needed. 
      </div>
      <div className="item-cards">
        <Card/>
      </div>
      <NewForm/>
      </div>
    </div>
  )
}

export default Main