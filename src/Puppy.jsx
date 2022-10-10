import Toy from "./Toy"

const Puppy = (props) => {
  return (
    <>
      <h3>
        {props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}.
      </h3>
      {props.puppy.toys.map(toy => 
        <Toy toy={toy} dogName={props.puppy.name} />  
      )}
    </>
  )
}

export default Puppy