import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('API data loads', () => {
  return axios.get('http://localhost:5000/api/players').then(res => {
    expect(res.data.length).toBe(101)
  })
})

test('Dark Mode Works', () => {
  
  if(localStorage.darkmode == true){
    expect(document.body.classList.value).toBe('dark')
  } else {
    expect(document.body.classList.value).toBe('')
  }
})