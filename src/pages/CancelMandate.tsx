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
  XCircle,
} from "lucide-react";

const CancelMandate = () => {
  const [formData, setFormData] = useState({
    policyNumber: "",
    mandateId: "",
    reason: "",
    cancellationDate: "",
    confirmCancellation: false,
  });

  const [selectedMandate, setSelectedMandate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.confirmCancellation) {
      alert("Please confirm that you want to cancel this mandate");
      return;
    }
    console.log("Mandate cancellation submitted:", formData);
    alert("Mandate cancellation request submitted successfully!");
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel this request? All entered data will be lost."
      )
    ) {
      setFormData({
        policyNumber: "",
        mandateId: "",
        reason: "",
        cancellationDate: "",
        confirmCancellation: false,
      });
      setSelectedMandate("");
    }
  };

  // Mock data for existing mandates
  const existingMandates = [
    { id: "MAND-001", policyNumber: "POL-2025-001", bankName: "Default Bank Corp", accountNumber: "****1234", status: "Active" },
    { id: "MAND-002", policyNumber: "POL-2025-002", bankName: "First National Bank", accountNumber: "****5678", status: "Active" },
    { id: "MAND-003", policyNumber: "POL-2025-003", bankName: "City Bank", accountNumber: "****9012", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Cancel Mandate</h1>
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
                Cancel Mandate Authorization
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Understanding Mandate Cancellation
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                You can cancel your mandate authorization at any time to stop automatic premium payments.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      Important: Cancellation Notice
                    </p>
                    <p className="text-sm text-gray-700">
                      Cancelling your mandate will stop automatic premium payments. You will need to make manual payments 
                      to maintain your insurance coverage. Please ensure you have alternative payment arrangements in place.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Once submitted, your mandate cancellation will be processed within 2-3 business days. 
                You will receive a confirmation email once the cancellation is complete.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Select Mandate to Cancel
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Mandate
                </label>
                <select
                  value={selectedMandate}
                  onChange={(e) => setSelectedMandate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  aria-label="Choose Mandate"
                >
                  <option value="">Select a mandate to cancel...</option>
                  {existingMandates.map((mandate) => (
                    <option key={mandate.id} value={mandate.id}>
                      {mandate.id} - {mandate.policyNumber} ({mandate.bankName} - {mandate.accountNumber})
                    </option>
                  ))}
                </select>
              </div>

              {selectedMandate && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Selected Mandate Details:</h4>
                  {(() => {
                    const mandate = existingMandates.find(m => m.id === selectedMandate);
                    return mandate ? (
                      <div className="text-sm text-gray-600">
                        <p><strong>Mandate ID:</strong> {mandate.id}</p>
                        <p><strong>Policy Number:</strong> {mandate.policyNumber}</p>
                        <p><strong>Bank:</strong> {mandate.bankName}</p>
                        <p><strong>Account:</strong> {mandate.accountNumber}</p>
                        <p><strong>Status:</strong> <span className="text-green-600">{mandate.status}</span></p>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Cancellation Details
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
                    Mandate ID
                  </label>
                  <input
                    type="text"
                    name="mandateId"
                    value={formData.mandateId}
                    onChange={handleChange}
                    placeholder="e.g., MAND-001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    aria-label="Mandate ID"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Cancellation
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  aria-label="Reason for Cancellation"
                >
                  <option value="">Select reason...</option>
                  <option value="financial-constraints">Financial Constraints</option>
                  <option value="policy-change">Policy Change</option>
                  <option value="bank-account-closure">Bank Account Closure</option>
                  <option value="prefer-manual-payment">Prefer Manual Payment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Cancellation Date
                </label>
                <input
                  type="date"
                  name="cancellationDate"
                  value={formData.cancellationDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  aria-label="Preferred Cancellation Date"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="confirmCancellation"
                  checked={formData.confirmCancellation}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  I confirm that I want to cancel this mandate authorization and understand that 
                  automatic premium payments will stop. I will make alternative payment arrangements 
                  to maintain my insurance coverage.
                </span>
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel Request
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Submit Cancellation
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

export default CancelMandate;
