import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import LandingPage from './pages/landing-page/LandingPage';
import PaymentPage from './pages/payment-page/PaymentPage';
import PayingPage from './pages/paying-page/PayingPage';
import ReceiptPage from './pages/receipt-page/ReceiptPage';
import LoginPage from './pages/login-page/LoginPage';
import DetailPage from './pages/detail-page/DetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/paying" element={<PayingPage  />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
