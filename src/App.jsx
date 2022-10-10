import './App.css'
import PuppyList from './PuppyList'

function App() {
  const puppies = [
    {
      name: 'Ruby', 
      breed: 'Cheese Hound', 
      age: 3, 
      toys: ['squeaky ball', 'stick', 'giant rope toy']
    },{
      name: 'Liam', 
      breed: 'Schnauzer', 
      age: 2, 
      toys: ['green duck', 'purple duck', 'yellow duck']
    },{
      name: 'Franklin', 
      breed: 'Border Collie', 
      age: 15, 
      toys: ['deer antler', 'stuffed pig', 'squeaky duck']
    }
  ]
  return(
    <div>
      <PuppyList puppies={puppies} />
    </div>
  )
}

export default App