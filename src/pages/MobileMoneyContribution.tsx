import { useState } from "react";
import {
  Smartphone,
  Home,
  Users,
  Building,
  DollarSign,
  Calendar,
  Bell,
  Shield,
  AlertCircle,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const MobileMoneyContribution = () => {
  const [formData, setFormData] = useState({
    policyNumber: "",
    amount: "",
    mobileNumber: "",
    mobileMoneyProvider: "",
    paymentReference: "",
    paymentDate: "",
    confirmPayment: false,
  });

  const [selectedPolicy, setSelectedPolicy] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.confirmPayment) {
      alert("Please confirm your payment details before proceeding");
      return;
    }
    console.log("Mobile money payment submitted:", formData);
    alert("Mobile money payment submitted successfully! You will receive a confirmation SMS shortly.");
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel this payment? All entered data will be lost."
      )
    ) {
      setFormData({
        policyNumber: "",
        amount: "",
        mobileNumber: "",
        mobileMoneyProvider: "",
        paymentReference: "",
        paymentDate: "",
        confirmPayment: false,
      });
      setSelectedPolicy("");
    }
  };

  // Mock data for active policies
  const activePolicies = [
    { policyNumber: "POL-2025-001", type: "Health Insurance", premium: "50,000", dueDate: "2025-02-15" },
    { policyNumber: "POL-2025-002", type: "Life Insurance", premium: "75,000", dueDate: "2025-02-20" },
    { policyNumber: "POL-2025-003", type: "Motor Insurance", premium: "30,000", dueDate: "2025-02-25" },
  ];

  const mobileMoneyProviders = [
    "MTN Mobile Money",
    "Orange Money",
    "Express Union Mobile",
    "Cameroon Mobile Money",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded">
                <Smartphone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Mobile Money Payment</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-white text-red-600 rounded-lg font-medium hover:bg-red-50 transition">
                Settings
              </button>
              <button className="px-4 py-2 bg-red-700 rounded-lg font-medium hover:bg-red-800 transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Users className="h-5 w-5" />
              <span>My Policies</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Building className="h-5 w-5" />
              <span>Insurance Companies</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <DollarSign className="h-5 w-5" />
              <span>Commissions</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Calendar className="h-5 w-5" />
              <span>Transfers</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Bell className="h-5 w-5" />
              <span>Notification</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium cursor-pointer">
              <CreditCard className="h-5 w-5" />
              <span>Payments</span>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Mobile Money Premium Payment
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Mobile Money Payment Information
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Pay your insurance premiums conveniently using mobile money services.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      Secure & Instant Payment
                    </p>
                    <p className="text-sm text-gray-700">
                      Your mobile money payment will be processed instantly and securely. 
                      You will receive immediate confirmation via SMS and email.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Supported Providers:</strong> MTN Mobile Money, Orange Money, Express Union Mobile, 
                  and other registered mobile money services in Cameroon.
                </p>
              </div>

              <p className="text-sm text-gray-600">
                All transactions are secured with industry standard encryption and require 
                mobile money PIN verification for enhanced security.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Select Policy for Payment
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Policy
                </label>
                <select
                  value={selectedPolicy}
                  onChange={(e) => setSelectedPolicy(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  aria-label="Choose Policy"
                >
                  <option value="">Select a policy to pay...</option>
                  {activePolicies.map((policy) => (
                    <option key={policy.policyNumber} value={policy.policyNumber}>
                      {policy.policyNumber} - {policy.type} (Premium: {policy.premium} FCFA)
                    </option>
                  ))}
                </select>
              </div>

              {selectedPolicy && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Selected Policy Details:</h4>
                  {(() => {
                    const policy = activePolicies.find(p => p.policyNumber === selectedPolicy);
                    return policy ? (
                      <div className="text-sm text-gray-600">
                        <p><strong>Policy Number:</strong> {policy.policyNumber}</p>
                        <p><strong>Type:</strong> {policy.type}</p>
                        <p><strong>Premium Amount:</strong> {policy.premium} FCFA</p>
                        <p><strong>Due Date:</strong> {policy.dueDate}</p>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Payment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Policy Number
                  </label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    placeholder="e.g., POL-2025-001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Policy Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (FCFA)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Amount in FCFA"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g., 677123456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Mobile Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Money Provider
                  </label>
                  <select
                    name="mobileMoneyProvider"
                    value={formData.mobileMoneyProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Mobile Money Provider"
                  >
                    <option value="">Select provider...</option>
                    {mobileMoneyProviders.map((provider) => (
                      <option key={provider} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Reference (Optional)
                  </label>
                  <input
                    type="text"
                    name="paymentReference"
                    value={formData.paymentReference}
                    onChange={handleChange}
                    placeholder="e.g., Premium payment Feb 2025"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Payment Reference"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Date
                  </label>
                  <input
                    type="date"
                    name="paymentDate"
                    value={formData.paymentDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Payment Date"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Summary
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Policy Number:</span>
                    <span className="ml-2 font-medium">{formData.policyNumber || "Not specified"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Amount:</span>
                    <span className="ml-2 font-medium">{formData.amount ? `${formData.amount} FCFA` : "Not specified"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Mobile Number:</span>
                    <span className="ml-2 font-medium">{formData.mobileNumber || "Not specified"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Provider:</span>
                    <span className="ml-2 font-medium">{formData.mobileMoneyProvider || "Not specified"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> You will be redirected to your mobile money provider's 
                    payment interface to complete the transaction. Ensure you have sufficient balance 
                    and your mobile money PIN ready.
                  </p>
                </div>
              </div>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="confirmPayment"
                  checked={formData.confirmPayment}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  I confirm that the payment details are correct and I authorize this mobile money 
                  transaction for my insurance premium payment. I understand that this transaction 
                  will be processed immediately.
                </span>
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel Payment
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-4">
              <span className="hover:text-red-600 cursor-pointer">
                Quick Links
              </span>
              <span className="hover:text-red-600 cursor-pointer">Legal</span>
              <span className="hover:text-red-600 cursor-pointer">Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-gray-500" />
              <span className="text-xs">Secured by SSL Encryption</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileMoneyContribution;
