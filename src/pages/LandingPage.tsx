import { useState } from 'react';
import { Shield, Heart } from 'lucide-react';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showProductSelection, setShowProductSelection] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showProposalForm, setShowProposalForm] = useState(false);

  const featuredProducts = [
    {
      company: "ICEA",
      type: "Health Insurance",
      icon: Heart,
      description: "Comprehensive health coverage for you and your family with access to quality healthcare facilities.",
      benefits: [
        "Inpatient & Outpatient Cover",
        "Maternity Services",
        "Dental & Optical Care",
        "Emergency Medical Services"
      ],
      color: "bg-red-50"
    },
    {
      company: "Jubilee",
      type: "Life Insurance",
      icon: Shield,
      description: "Secure your family's future with life insurance that provides financial protection and peace of mind.",
      benefits: [
        "Life Cover up to UGX 500M",
        "Critical Illness Cover",
        "Disability Benefits",
        "Premium Cashback Options"
      ],
      color: "bg-red-50"
    }
  ];

  const allProducts = [
    "ICEA - Comprehensive Health Insurance",
    "ICEA - Family Health Plan",
    "ICEA - Student Health Cover",
    "Jubilee - Term Life Insurance",
    "Jubilee - Whole Life Insurance",
    "Jubilee - Education Protection Plan",
    "ICEA - Travel Insurance",
    "Jubilee - Pension Plan",
    "ICEA - Personal Accident Cover",
    "Jubilee - Investment Life Plan"
  ];

  const handleViewAllProducts = () => {
    setShowAccountModal(true);
  };

  const handleHasAccount = (hasAccount: boolean) => {
    setShowAccountModal(false);
    if (hasAccount) {
      setShowProductSelection(true);
    } else {
      window.open('https://www.absa.co.ug/personal/ways-to-bank/open-an-account/', '_blank');
    }
  };

  const handleProductSelect = () => {
    if (selectedProduct) {
      setShowProductSelection(false);
      setShowProposalForm(true);
    }
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Proposal submitted successfully! Our team will contact you shortly.');
    setShowProposalForm(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50">
      {/* Main Landing Content */}
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Welcome to Bancassurance</h1>
        <p className="text-lg text-gray-700 mb-8">
          The best of <strong>Life</strong> and <strong>Health</strong> insurance from our top partners, <strong>Jubilee</strong> and <strong>ICEA</strong>.
        </p>
        <button
          onClick={handleViewAllProducts}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          View All Products
        </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <product.icon className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <div className="font-bold text-lg">{product.company}</div>
                  <div className="text-sm text-gray-500">{product.type}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-2">{product.description}</div>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                {product.benefits.map((benefit, bidx) => (
                  <li key={bidx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Account Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Account Verification</h3>
            <p className="text-gray-600 mb-6">
              Do you have an account with ABSA Bank?
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleHasAccount(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all"
              >
                Yes, I have an account
              </button>
              <button
                onClick={() => handleHasAccount(false)}
                className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 rounded-lg font-medium transition-all"
              >
                No, create an account
              </button>
              <button
                onClick={() => setShowAccountModal(false)}
                className="w-full text-gray-600 hover:text-gray-800 py-2 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Selection Modal */}
      {showProductSelection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 transform transition-all max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Insurance Product</h3>
            <p className="text-gray-600 mb-6">
              Choose from our comprehensive range of insurance products
            </p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Insurance Products
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="">Select a product...</option>
                {allProducts.map((product, index) => (
                  <option key={index} value={product}>{product}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleProductSelect}
                disabled={!selectedProduct}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue to Proposal Form
              </button>
              <button
                onClick={() => {
                  setShowProductSelection(false);
                  setSelectedProduct('');
                }}
                className="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proposal Form Modal */}
      {showProposalForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 transform transition-all max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Insurance Proposal Form</h3>
            <p className="text-gray-600 mb-6">Selected: <span className="font-semibold text-red-600">{selectedProduct}</span></p>
            <form onSubmit={handleProposalSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="+256 700 000 000"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">Select gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ABSA Account Number</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter your ABSA account number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter your residential address"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Amount (UGX)</label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="">Select coverage amount...</option>
                  <option value="10000000">10,000,000</option>
                  <option value="25000000">25,000,000</option>
                  <option value="50000000">50,000,000</option>
                  <option value="100000000">100,000,000</option>
                  <option value="250000000">250,000,000</option>
                  <option value="500000000">500,000,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Any additional information or special requirements..."
                ></textarea>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  id="terms"
                  className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms and conditions and authorize ABSA Bank to process my insurance proposal with the selected provider.
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Proposal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowProposalForm(false);
                    setSelectedProduct('');
                  }}
                  className="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;