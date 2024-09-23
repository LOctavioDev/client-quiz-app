import { useEffect } from 'react';
import Questions from './Questions';

// ? REDUX STORE IMPORT

import { useSelector } from 'react-redux';
export default function Quiz() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });
  function onNext() {
    console.log('next');
  }

  function onPrev() {
    console.log('prev');
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application Octavio</h1>

      {/* ? DISPLAY QUESTION */}

      <Questions />

      <div className="grid">
        <button
          className="btn prev"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          className="btn next"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
