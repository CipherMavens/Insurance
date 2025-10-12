import { useState } from 'react';
import { Home, Users, Building2, BarChart3, TrendingUp, CheckCircle, Bell, LogOut, Search, Settings, AlertCircle, Loader2 } from 'lucide-react';

interface ClientInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function AccountVerification() {
  const [accountNumber, setAccountNumber] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isAutoFilled, setIsAutoFilled] = useState(false);

  const handleAccountNumberSubmit = () => {
    if (accountNumber.length >= 6) {
      setShowDisclaimer(true);
    } else {
      alert('Please enter a valid account number');
    }
  };

  const handleAcceptDisclaimer = () => {
    setShowDisclaimer(false);
    setShowOtpModal(true);
  };

  const handleDeclineDisclaimer = () => {
    setShowDisclaimer(false);
    alert('You can complete the information manually below');
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        // Simulate fetching client data
        setClientInfo({
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '+256 700 123 456',
          address: 'Kampala, Uganda'
        });
        setIsAutoFilled(true);
        setIsLoading(false);
        setShowOtpModal(false);
        alert('Client information retrieved successfully!');
      }, 2000);
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 bg-red-600">
          <div className="flex items-center space-x-2 text-white">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Building2 className="w-5 h-5 text-red-600" />
            </div>
            <span className="font-bold text-lg">BancaSure</span>
          </div>
        </div>
        <nav className="mt-2">
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Home className="w-5 h-5 mr-3" />
            <span className="text-sm">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Users className="w-5 h-5 mr-3" />
            <span className="text-sm">My Policies</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Building2 className="w-5 h-5 mr-3" />
            <span className="text-sm">Insurance Companies</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <BarChart3 className="w-5 h-5 mr-3" />
            <span className="text-sm">Commissions</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <TrendingUp className="w-5 h-5 mr-3" />
            <span className="text-sm">Transfers</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 bg-red-50 text-red-600 border-l-4 border-red-600">
            <CheckCircle className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Verification</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Bell className="w-5 h-5 mr-3" />
            <span className="text-sm">Mandates</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <header className="bg-red-600 text-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm hover:text-red-100">Home</a>
              <a href="#" className="text-sm hover:text-red-100">Customer Policies</a>
              <a href="#" className="text-sm hover:text-red-100">Insurance Companies</a>
              <a href="#" className="text-sm hover:text-red-100">Commission Analytics</a>
              <a href="#" className="text-sm hover:text-red-100">Transfers</a>
              <a href="#" className="text-sm font-semibold">Account Verification</a>
              <a href="#" className="text-sm hover:text-red-100">Client Mandates</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search policies, customers..."
                  className="pl-9 pr-4 py-1 rounded text-sm text-gray-800 w-64 focus:outline-none"
                />
              </div>
              <button className="hover:text-red-100">
                <Settings className="w-5 h-5" />
              </button>
              <button className="hover:text-red-100">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <div className="p-8 max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Account Verification Settings</h1>
          <p className="text-gray-600 mb-8">
            Verify your account information to strengthen security and protect your financial and policy data.
          </p>

          {/* Account Information Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 max-w-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter your bank account number to auto-fill your information, or complete manually.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Account Number
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Enter account number"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isAutoFilled}
                  />
                  <button
                    onClick={handleAccountNumberSubmit}
                    disabled={isAutoFilled}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Verify
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isAutoFilled}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isAutoFilled}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isAutoFilled}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={clientInfo.address}
                    onChange={(e) => setClientInfo({...clientInfo, address: e.target.value})}
                    placeholder="Enter address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isAutoFilled}
                  />
                </div>

                {isAutoFilled && (
                  <div className="flex items-center space-x-2 text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Information auto-filled from bank portal</span>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OTP Verification Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    An OTP will be sent to your registered phone number for verification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
            >
              Continue
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-900">Quick Links</a>
              <a href="#" className="hover:text-gray-900">Legal</a>
              <a href="#" className="hover:text-gray-900">Support</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-900">📱</button>
              <button className="hover:text-gray-900">🐦</button>
              <button className="hover:text-gray-900">📘</button>
              <button className="hover:text-gray-900">📷</button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-start mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Integration Disclaimer</h3>
                <p className="text-sm text-gray-600 mb-4">
                  By proceeding, you authorize us to retrieve and integrate your account information from your bank's portal. This includes:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 list-disc list-inside">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Residential Address</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  An OTP will be sent to your registered phone number for verification. If you decline, you can complete the information manually.
                </p>
                <p className="text-xs text-gray-500">
                  Your data is secure and will only be used for account verification purposes.
                </p>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleDeclineDisclaimer}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptDisclaimer}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Enter OTP</h3>
            <p className="text-sm text-gray-600 mb-6">
              We've sent a 6-digit verification code to your registered phone number ending in ****{accountNumber.slice(-4)}.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-center text-2xl tracking-widest"
                maxLength={6}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={handleVerifyOtp}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium disabled:bg-gray-400 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify OTP'
                )}
              </button>
              <button
                onClick={() => setShowOtpModal(false)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button className="text-sm text-red-600 hover:text-red-700">
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
