import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ClientPolicyDashboard from './pages/ClientPolicyDashboard';
import AccountVerification from './pages/AccountVerification';
import InsuranceCompanyDashboard from './pages/InsuranceCompanyDasboard';
import CommissionAnalytics from './pages/CommissionAnalytics';
import ClientMandate from './pages/ClientMandate';
import ClientOnboardingInsurance from './pages/ClientOnboardingInsurance';
import AgentManagement  from './pages/AgentManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/client-policies" element={<ClientPolicyDashboard />} />
          <Route path="/account-verification" element={<AccountVerification />} />
          <Route path="/insurance-dashboard" element={<InsuranceCompanyDashboard />} />
          <Route path="/commission-analytics" element={<CommissionAnalytics />} />
          <Route path="/client-mandate" element={<ClientMandate />} />
          <Route path="/client-onboarding" element={<ClientOnboardingInsurance />} />
          <Route path="/client-onboarding" element={<ClientOnboardingInsurance />} />
          <Route path="/client-onboarding" element={<ClientOnboardingInsurance />} />
          <Route path="/agent-management" element={<AgentManagement />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;