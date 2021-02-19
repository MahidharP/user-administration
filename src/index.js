import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './customs.css'
import { Container } from 'react-bootstrap'


ReactDOM.render(
  <React.StrictMode>
    <Container style={{ backgroundColor: "pink" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);