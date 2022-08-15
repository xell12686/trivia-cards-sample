import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

// const FETCHED_DATA_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
const QUESTIONS_API_BASE_URL = '/data/questions.json';

export default function Trivia () {
  const { data, status, error } = useFetch(QUESTIONS_API_BASE_URL);
  console.log('init StarterComponent');
  console.log('status: ', status);
  console.log('data: ', data);
  useEffect(() => {
    // useFetch(FETCHED_DATA_URL);
    console.log('Trivia StarterComponent...');
  }, []);

  return (
        <div className='Trivia'>
            <h3>Trivia Component</h3>
            {error &&
                <p className="error">{error}</p>
            }
        </div>
  );
}

function test () {

}

test();
