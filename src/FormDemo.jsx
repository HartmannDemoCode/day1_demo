import {useState} from 'react';
const FormDemo = () => {
    const [inputValue, setInputValue] = useState({lname:'',fname:''});
    
    const handleChange = (event) => {
      setInputValue({...inputValue, [event.target.id]: event.target.value});
    }
  
    const handleSubmit = (event) => {
      console.log('A name was submitted: ',inputValue);
      event.preventDefault();
    }
  
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" id="fname" value={inputValue.fname} onChange={handleChange} />
            <input type="text" id="lname" value={inputValue.lname} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  }
  
export default FormDemo;