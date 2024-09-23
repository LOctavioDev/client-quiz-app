import { useRef } from 'react';
import { Link } from 'react-router-dom';
export default function Index() {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application Octavio</h1>
      <ol>
        <li>You will be asked 10 qestions one after anther.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one options.</li>
        <li>You can review and change answers ebfore the quiz finish.</li>
        <li>The result will be declared at the end of the quiz</li>
      </ol>

      <form id="form">
        <input
          className="userid"
          ref={inputRef}
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link
          className="btn"
          to={'quiz'}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
