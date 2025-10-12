import { useState } from 'react';
import { Search, Bell, MessageSquare, User, FileText, Download, Calendar, CreditCard, Upload } from 'lucide-react';

interface Policy {
  policyId: string;
  type: string;
  coverage: string;
  status: 'Active' | 'Pending' | 'Renewed' | 'Expired';
  startDate: string;
  endDate: string;
  nextPayment: string;
}

export default function ClientPolicyDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [documentType, setDocumentType] = useState('');

  const policies: Policy[] = [
    { policyId: 'POL-79801', type: 'Life', coverage: 'UGX 50M', status: 'Active', startDate: '2023-01-15', endDate: '2024-01-15', nextPayment: '2024-02-01' },
    { policyId: 'POL-79802', type: 'Health', coverage: 'UGX 15M', status: 'Active', startDate: '2023-03-20', endDate: '2024-03-20', nextPayment: '2024-04-15' },
    { policyId: 'POL-79803', type: 'Auto', coverage: 'UGX 30M', status: 'Pending', startDate: '2024-06-05', endDate: '2025-06-05', nextPayment: 'N/A' },
    { policyId: 'POL-79804', type: 'Home', coverage: 'UGX 80M', status: 'Active', startDate: '2021-09-01', endDate: '2023-09-01', nextPayment: '2024-02-28' },
    { policyId: 'POL-79805', type: 'Travel', coverage: 'UGX 25M', status: 'Renewed', startDate: '2023-10-01', endDate: '2024-10-01', nextPayment: 'N/A' },
  ];

  const filteredPolicies = policies.filter(policy =>
    policy.policyId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Renewed': return 'bg-blue-100 text-blue-700';
      case 'Expired': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handlePayment = () => {
    if (selectedPolicy && amount && paymentMethod) {
      alert(`Payment of UGX ${amount} for ${selectedPolicy} via ${paymentMethod} initiated successfully!`);
    } else {
      alert('Please fill in all payment fields');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Screen</h1>
          <p className="text-sm text-indigo-300 mt-1">Insurance Management</p>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 bg-indigo-800 border-l-4 border-white">
            <User className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <FileText className="w-5 h-5 mr-3" />
            <span className="text-sm">My Policies</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <FileText className="w-5 h-5 mr-3" />
            <span className="text-sm">Insurance Companies</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <Download className="w-5 h-5 mr-3" />
            <span className="text-sm">Downloads</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <CreditCard className="w-5 h-5 mr-3" />
            <span className="text-sm">Transfers</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <Upload className="w-5 h-5 mr-3" />
            <span className="text-sm">Unit Policies</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-indigo-800">
            <Bell className="w-5 h-5 mr-3" />
            <span className="text-sm">My Account</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="bg-red-600 text-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-sm hover:text-red-100">Home</a>
              <a href="#" className="text-sm hover:text-red-100">About</a>
              <a href="#" className="text-sm hover:text-red-100">Banking</a>
              <a href="#" className="text-sm hover:text-red-100">Insurance</a>
              <a href="#" className="text-sm hover:text-red-100">Resources</a>
              <a href="#" className="text-sm hover:text-red-100">News Updates</a>
              <a href="#" className="text-sm hover:text-red-100">Contact Us</a>
              <a href="#" className="text-sm hover:text-red-100">Career Opportunities</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm bg-white text-red-600 px-4 py-1 rounded">
                <MessageSquare className="w-4 h-4" />
                <span>Report policy concern...</span>
              </button>
              <button className="text-sm bg-red-700 px-4 py-1 rounded hover:bg-red-800">NetBanking</button>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <h2 className="text-3xl font-bold text-gray-800">My Policy Dashboard</h2>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Active Policies</span>
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">4</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Pending Payments</span>
                  <CreditCard className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">2</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Policies Near Expiry</span>
                  <Bell className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">1</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Coverage Value</span>
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">UGX 970M</div>
              </div>
            </div>
          </div>

          {/* My Policies Section */}
          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">My Policies</h3>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by policy ID, type, or status..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="ml-4 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                All Statuses
              </button>
            </div>

            {/* Policies Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Policy ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coverage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Payment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPolicies.map((policy) => (
                    <tr key={policy.policyId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{policy.policyId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{policy.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{policy.coverage}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(policy.status)}`}>
                          {policy.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{policy.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{policy.endDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{policy.nextPayment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex flex-col space-y-1">
                          <button className="text-red-600 hover:text-red-800 text-xs text-left flex items-center">
                            <span className="mr-1">+</span> Claim
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-xs text-left flex items-center">
                            <span className="mr-1">⬇</span> Details
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-xs text-left flex items-center">
                            <span className="mr-1">👁</span> File
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-xs text-left flex items-center">
                            <span className="mr-1">+</span> Claim
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-xs text-left flex items-center">
                            <span className="mr-1">👁</span> Receipts
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment & Statements Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Make a Payment */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Make a Payment</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Choose policy and payment method</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose a policy</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={selectedPolicy}
                    onChange={(e) => setSelectedPolicy(e.target.value)}
                  >
                    <option value="">Select policy...</option>
                    {policies.map(p => (
                      <option key={p.policyId} value={p.policyId}>{p.policyId} - {p.type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose payment method</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Select method...</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment balance</label>
                  <input 
                    type="text"
                    placeholder="e.g. 150000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (UGX)</label>
                  <input 
                    type="text"
                    placeholder="e.g. 150000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button 
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-medium"
                  onClick={handlePayment}
                >
                  Proceed to Pay
                </button>
              </div>
            </div>

            {/* Policy Statements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Policy Statements</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Download policy related statements and documents</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose a policy</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select policy...</option>
                    {policies.map(p => (
                      <option key={p.policyId} value={p.policyId}>{p.policyId} - {p.type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                  >
                    <option value="">Select document...</option>
                    <option value="Policy Document">Policy Document</option>
                    <option value="Premium Receipt">Premium Receipt</option>
                    <option value="Claim Form">Claim Form</option>
                    <option value="Statement">Statement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose document type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select type...</option>
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>Word</option>
                  </select>
                </div>

                <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Documents
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">Quick Links</a>
              <a href="#" className="hover:text-gray-900">Legal</a>
              <a href="#" className="hover:text-gray-900">Support</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-900">📧</button>
              <button className="hover:text-gray-900">🐦</button>
              <button className="hover:text-gray-900">📘</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}