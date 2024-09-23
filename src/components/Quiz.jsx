import Questions from "./Questions";

export default function Quiz() {
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
