import { useState } from 'react';

const useInputChange = () => {
  const [input, setInput] = useState({});

  const handleInputChange = event => {
    const {name, value} = event.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  return [input, handleInputChange]
}

export default useInputChange;