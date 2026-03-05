import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import IdentityGuidePage from './pages/IdentityGuidePage';
import AuthorInfoPage from './pages/AuthorInfoPage';
import InviteCodePage from './pages/InviteCodePage';
import SignContractStep1Page from './pages/SignContractStep1Page';
import SignContractStep2Page from './pages/SignContractStep2Page';
import SignContractStep3Page from './pages/SignContractStep3Page';
import WorkbenchPage from './pages/WorkbenchPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/identity-guide" element={<IdentityGuidePage />} />
        <Route path="/author-info" element={<AuthorInfoPage />} />
        <Route path="/invite-code" element={<InviteCodePage />} />
        <Route path="/sign-contract-step1" element={<SignContractStep1Page />} />
        <Route path="/sign-contract-step2" element={<SignContractStep2Page />} />
        <Route path="/sign-contract-step3" element={<SignContractStep3Page />} />
        <Route path="/workbench" element={<WorkbenchPage />} />
      </Routes>
    </Router>
  );
};

export default App;