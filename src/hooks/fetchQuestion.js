// ? FETCH QUESTION HOOK TO FETCH API DATA AND SET VALUE TO STORE

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Action from '../redux/question_reducers';
export const useFetchQuestion = () => {

  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }))(
      // ? ASYNC FUNCTION FETCH BACKEND
      async () => {
        try {
          let question = {};

          if (question.length > 0) {
            setGetData((prev) => ({ ...prev, isLoading: false }));
            setGetData((prev) => ({ ...prev, apiData: question }));

            // ? DISPATCH AN ACTION
            dispatch(Action.startExamAction(question));
          } else {
            throw new Error('No Question Available');
          }
        } catch (error) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, serverError: error }));
        }
      }
    );
  }, [dispatch]);

  return [getData, setGetData]
};
