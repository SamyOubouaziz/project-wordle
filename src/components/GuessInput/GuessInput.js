import React from 'react';



function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess)
  }

  return(
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);  
        }}
      />
</form>
    </div>
  );
}

export default GuessInput;
