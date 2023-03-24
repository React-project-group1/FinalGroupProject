import Dropdown from 'react-bootstrap/Dropdown';


function FilterForm() {
  return (
    

      <Dropdown  align={"start"} className="d-inline mx-2" autoClose="outside, true">
        <Dropdown.Toggle  id="make-Filter">
          Select Make
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Header> Select a manufacturer</Dropdown.Header>
          <Dropdown.Item href="#">Porsche</Dropdown.Item>
          <Dropdown.Item href="#">Lamborghini</Dropdown.Item>
          <Dropdown.Item href="#">Ferrari</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

     
    
  );
}

export default FilterForm;