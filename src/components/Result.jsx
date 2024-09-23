import { Link } from 'react-router-dom';
import '../styles/Result.css';
import ResultTable from './ResultTable';
export default function Result() {
  function onRestart() {
    console.log('on restart');
  }

  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Aplicaction Octavio</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username : </span>
          <span className="bold">Octavio</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points: </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points: </span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result : </span>
          <span className="bold">Passwd</span>
        </div>
      </div>

      <div className="start">
        <Link
          className="btn"
          to={'/'}
          onClick={onRestart}
        >
          Restart
        </Link>
      </div>

      <div className="container">
        {/* ? RESULT TABLE */}
        <ResultTable />
      </div>
    </div>
  );
}
