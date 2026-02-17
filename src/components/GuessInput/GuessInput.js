import React from 'react';

export const [guesses, setGuesses] = React.useState('');

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return(
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          const nextGuesses = [...guesses];
          nextGuesses.push(event.target.value);
          setGuesses(nextGuesses);
          console.info(nextGuesses);
          setGuess("")
        }}
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guess}
        required
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={event => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
</form>
    </div>
  );
}

export default GuessInput;
