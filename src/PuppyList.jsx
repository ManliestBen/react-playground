import Puppy from "./Puppy";

const PuppyList = (props) => {
  return (
    <>
      <h2>Dem puppies:</h2>
      {props.puppies.map(puppy => 
        <Puppy key={puppy.name} puppy={puppy} />
      )}
    </>
  );
}

export default PuppyList;