import React from 'react';
import { guesses } from "../GuessInput";

function GuessResults() {
  return (
  <div className="guess-results">
    Results:
    {guesses.map((guess) => {
      return (
        <p className='guess'>{guess}</p>
      )
    })}
  </div>
  );
}

export default GuessResults;
