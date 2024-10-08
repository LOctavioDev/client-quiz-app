import { useState } from 'react';

// ? CUSTOM HOOK
import { useFetchQuestion } from '../hooks/fetchQuestion';
export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{isLoading, apiData, serverError}] = useFetchQuestion()
  function onSelect() {
    console.log('radio button change');
  }

  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label
            className="text-primary"
            htmlFor="q1-option"
          >
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
}
