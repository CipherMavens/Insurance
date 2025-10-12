import { useState } from "react";
import {
  FileText,
  Home,
  Users,
  Building,
  DollarSign,
  Calendar,
  Bell,
  Shield,
  AlertCircle,
} from "lucide-react";

const ClientMandate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    bankBranch: "",
    policyNumber: "",
    paymentFrequency: "monthly",
    mandateStartDate: "",
    mandateEndDate: "",
    otpCode: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleGenerateOTP = () => {
    alert("OTP has been sent to your registered mobile number");
  };

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Mandate submitted successfully!");
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All entered data will be lost."
      )
    ) {
      setFormData({
        fullName: "",
        nationalId: "",
        bankName: "",
        accountNumber: "",
        accountHolderName: "",
        bankBranch: "",
        policyNumber: "",
        paymentFrequency: "monthly",
        mandateStartDate: "",
        mandateEndDate: "",
        otpCode: "",
        agreeToTerms: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Client Mandate Form</h1>
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
              <FileText className="h-5 w-5" />
              <span>Mandates</span>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Client Mandate Authorization
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Understanding Your Mandate
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                A client mandate allows the insurance company to access your
                account for premium payments.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-gray-700">
                  This form allows you to authorize the bank to directly debit
                  your specified account for regular insurance premium payments.
                  This ensures timely payment for enhanced coverage, and
                  simplifies your financial management.
                </p>
              </div>

              <p className="text-sm text-gray-600">
                All transactions are secured with industry standard encryption
                and, optionally, require One-Time Password (OTP) confirmation
                for enhanced security. You retain full control and can modify or
                cancel this mandate at any time through our system.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Mandate Details
              </h3>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-700 mb-3">
                  Client Identification
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full legal name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      National ID / Passport Number
                    </label>
                    <input
                      type="text"
                      name="nationalId"
                      value={formData.nationalId}
                      onChange={handleChange}
                      placeholder="e.g., CM98876880"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-700 mb-3">
                  Bank Account Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="e.g., Default Bank Corp"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      placeholder="e.g., 1234567890123456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleChange}
                      placeholder="Name as on bank account"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Branch
                    </label>
                    <input
                      type="text"
                      name="bankBranch"
                      value={formData.bankBranch}
                      onChange={handleChange}
                      placeholder="e.g., Main Street Branch"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-700 mb-3">
                  Policy and Payment Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Policy Number
                    </label>
                    <input
                      type="text"
                      name="policyNumber"
                      value={formData.policyNumber}
                      onChange={handleChange}
                      placeholder="e.g., POL-2025"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Frequency
                    </label>
                    <select
                      name="paymentFrequency"
                      value={formData.paymentFrequency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      aria-label="Payment Frequency"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="semi-annually">Semi-Annually</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mandate Start Date
                    </label>
                    <input
                      type="date"
                      name="mandateStartDate"
                      value={formData.mandateStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      aria-label="Mandate Start Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mandate End Date (Optional)
                    </label>
                    <input
                      type="date"
                      name="mandateEndDate"
                      value={formData.mandateEndDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      aria-label="Mandate End Date"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Secure Authorization
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    For your security, we recommend confirming this mandate with
                    a One-Time Password (OTP) sent to your registered mobile
                    number.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    name="otpCode"
                    value={formData.otpCode}
                    onChange={handleChange}
                    placeholder="6-digit code"
                    maxLength={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleGenerateOTP}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Generate OTP
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms and conditions for direct debit
                  authorization.
                </span>
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Submit Mandate
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

export default ClientMandate;
