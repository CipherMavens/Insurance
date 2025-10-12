import React, { useState } from 'react';
import { Home, Users, FileText, Settings, Bell, Search, Upload, Plus, HelpCircle, Linkedin, Facebook, Twitter } from 'lucide-react';

interface ClientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  policies: string[];
  proofDocuments: File[];
  addressProof: File[];
  additionalNotes: string;
  agreeToTerms: boolean;
}

const ClientOnboardingInsurance = () => {
  const [activeTab, setActiveTab] = useState<'registration' | 'dashboard'>('registration');
  const [clientData, setClientData] = useState<ClientData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    policies: [],
    proofDocuments: [],
    addressProof: [],
    additionalNotes: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setClientData(prev => ({ ...prev, [name]: checked }));
    } else {
      setClientData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePolicyChange = (policy: string) => {
    setClientData(prev => {
      const policies = prev.policies.includes(policy)
        ? prev.policies.filter(p => p !== policy)
        : [...prev.policies, policy];
      return { ...prev, policies };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'proof' | 'address') => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (type === 'proof') {
        setClientData(prev => ({ ...prev, proofDocuments: [...prev.proofDocuments, ...fileArray] }));
      } else {
        setClientData(prev => ({ ...prev, addressProof: [...prev.addressProof, ...fileArray] }));
      }
    }
  };

  const handleSubmit = () => {
    if (!clientData.firstName || !clientData.lastName || !clientData.email) {
      alert('Please fill in all required personal information fields');
      return;
    }
    if (!clientData.streetAddress || !clientData.city || !clientData.zipCode) {
      alert('Please fill in all required address fields');
      return;
    }
    if (clientData.policies.length === 0) {
      alert('Please select at least one insurance policy');
      return;
    }
    if (!clientData.agreeToTerms) {
      alert('Please confirm that all information is accurate and agree to the policy');
      return;
    }

    console.log('Client data submitted:', clientData);
    alert('Client registration submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="text-red-600 font-bold text-2xl">✱</div>
            <span className="text-red-600 font-bold text-xl">logo</span>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg cursor-pointer font-medium">
            <Users className="h-5 w-5" />
            <span>Clients</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <FileText className="h-5 w-5" />
            <span>Policies</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <FileText className="h-5 w-5" />
            <span>Reports</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </div>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
              AL
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center justify-center">
            <Plus className="h-4 w-4 mr-2" />
            New Client
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clients, policies..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <HelpCircle className="h-5 w-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Client Onboarding & Tracking</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                View All Documents
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add New Client
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-t-lg border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('registration')}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === 'registration'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Client Registration
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === 'dashboard'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Client Dashboard
              </button>
            </div>
          </div>

          {/* Registration Form */}
          {activeTab === 'registration' && (
            <div className="bg-white rounded-b-lg shadow p-8">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Personal Information</h2>
                <p className="text-sm text-gray-600 mb-6">Provide basic client details.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={clientData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={clientData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={clientData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={clientData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (123) 456-7890"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={clientData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={clientData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="mb-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Address Details</h2>
                <p className="text-sm text-gray-600 mb-6">Capture property/residential address.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={clientData.streetAddress}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={clientData.city}
                      onChange={handleInputChange}
                      placeholder="Anytown"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={clientData.state}
                      onChange={handleInputChange}
                      placeholder="CA"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zip / Postal Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={clientData.zipCode}
                      onChange={handleInputChange}
                      placeholder="90210"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={clientData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="ug">Uganda</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Select Policies */}
              <div className="mb-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Select Policies</h2>
                <p className="text-sm text-gray-600 mb-6">Choose the insurance policies for this client.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition">
                    <input
                      type="checkbox"
                      checked={clientData.policies.includes('life')}
                      onChange={() => handlePolicyChange('life')}
                      className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Life Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition">
                    <input
                      type="checkbox"
                      checked={clientData.policies.includes('health')}
                      onChange={() => handlePolicyChange('health')}
                      className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Health Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition">
                    <input
                      type="checkbox"
                      checked={clientData.policies.includes('auto')}
                      onChange={() => handlePolicyChange('auto')}
                      className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Auto Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition">
                    <input
                      type="checkbox"
                      checked={clientData.policies.includes('home')}
                      onChange={() => handlePolicyChange('home')}
                      className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Home Insurance</span>
                  </label>
                </div>
              </div>

              {/* Upload Documents */}
              <div className="mb-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Upload Documents</h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload client identification and other required documents.
                    </p>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Proof (e.g., Driver's License, Passport)
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload(e, 'proof')}
                        className="hidden"
                        id="proof-upload"
                      />
                      <label
                        htmlFor="proof-upload"
                        className="text-red-600 text-sm font-medium cursor-pointer hover:underline"
                      >
                        Click to upload
                      </label>
                      {clientData.proofDocuments.length > 0 && (
                        <p className="text-xs text-green-600 mt-2">
                          {clientData.proofDocuments.length} file(s) uploaded
                        </p>
                      )}
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition cursor-pointer mt-4">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Address Proof (e.g., Utility Bill, Bank Statement)
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload(e, 'address')}
                        className="hidden"
                        id="address-upload"
                      />
                      <label
                        htmlFor="address-upload"
                        className="text-red-600 text-sm font-medium cursor-pointer hover:underline"
                      >
                        Click to upload
                      </label>
                      {clientData.addressProof.length > 0 && (
                        <p className="text-xs text-green-600 mt-2">
                          {clientData.addressProof.length} file(s) uploaded
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="additionalNotes"
                        value={clientData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder="Any specific client requirements or details..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Review & Submit</h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Double-check all details before submitting client registration.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={clientData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">
                          I confirm all information provided is accurate and consent to policy processing.
                        </span>
                      </label>
                    </div>

                    <p className="text-xs text-gray-600 mb-6">
                      By clicking "Submit", you acknowledge that the client's information will be used for review and policy assignment.
                    </p>

                    <button
                      onClick={handleSubmit}
                      className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={!clientData.agreeToTerms}
                    >
                      Submit Client Registration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="bg-white rounded-b-lg shadow p-8">
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Dashboard</h3>
                <p className="text-gray-600">
                  View and manage all registered clients and their policies here.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 mt-8">
          <div className="px-8 flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-6">
              <span className="hover:text-red-600 cursor-pointer">Support</span>
              <span className="hover:text-red-600 cursor-pointer">Legal</span>
            </div>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ClientOnboardingInsurance;