import React, { useState, useEffect } from 'react';
const Example = () => {
  const [count, setCount] = useState(0);
  const [newJoke, setNewJoke] = useState(false);
  const [joke, setJoke] = useState('');
  useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=>res.json())
    .then((joke)=>{
        console.log(joke.value);
        // vis joke
        setJoke(joke.value);
    });
    return ()=>{
        // Cleanup
    }
  },[newJoke]);

  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <button onClick={()=>setNewJoke(!newJoke)}>NY JOKE</button>
      <p style={{border:'5px solid black', padding:'40px'}}>{joke}</p>
    </div>
  );
}
export default Example;