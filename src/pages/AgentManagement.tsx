import React, { useState } from 'react';
import { Users, UserPlus, Eye, Trash2, Plus, X, Edit } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  agentCode: string;
  policies: Policy[];
}

interface Policy {
  id: string;
  policyNumber: string;
  policyType: string;
  customerName: string;
  premium: number;
  status: string;
}

const AgentManagement = () => {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      agentCode: 'AGENT-589023',
      policies: [
        { id: 'p1', policyNumber: 'LI-2023-001', policyType: 'Life Insurance', customerName: 'Alice Johnson', premium: 2500, status: 'Active' },
        { id: 'p2', policyNumber: 'HI-2023-045', policyType: 'Health Insurance', customerName: 'Bob Smith', premium: 1800, status: 'Active' }
      ]
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      agentCode: 'AGENT-589024',
      policies: [
        { id: 'p3', policyNumber: 'AI-2023-089', policyType: 'Auto Insurance', customerName: 'Charlie Brown', premium: 1200, status: 'Active' }
      ]
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agentCode: `AGENT-${Math.floor(100000 + Math.random() * 900000)}`
  });

  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showAddPolicy, setShowAddPolicy] = useState(false);
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null);

  const [newPolicy, setNewPolicy] = useState({
    policyNumber: '',
    policyType: 'Life Insurance',
    customerName: '',
    premium: '',
    status: 'Active'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePolicyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPolicy(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
  };

  const checkDuplicateEmail = (email: string) => {
    return agents.some(agent => agent.email.toLowerCase() === email.toLowerCase());
  };

  const handleRegisterAgent = () => {
    // Validation checks
    if (!formData.name.trim()) {
      alert('Please enter agent name');
      return;
    }

    if (formData.name.trim().length < 2) {
      alert('Agent name must be at least 2 characters long');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter email address');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (checkDuplicateEmail(formData.email)) {
      alert('An agent with this email already exists');
      return;
    }

    if (!formData.phone.trim()) {
      alert('Please enter phone number');
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    // Create new agent
    const newAgent: Agent = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      agentCode: formData.agentCode,
      policies: []
    };

    setAgents(prev => [...prev, newAgent]);
    
    // Reset form with new agent code
    setFormData({
      name: '',
      email: '',
      phone: '',
      agentCode: `AGENT-${Math.floor(100000 + Math.random() * 900000)}`
    });
    
    // Show success message and automatically show the new agent
    alert(`Agent registered successfully!\nAgent Code: ${newAgent.agentCode}\nName: ${newAgent.name}\nEmail: ${newAgent.email}`);
    
    // Automatically show all agents list to see the newly added agent
    setShowAllAgents(true);
    setShowProfile(false);
  };

  const handleViewProfile = (agent: Agent) => {
    setSelectedAgent(agent);
    setShowProfile(true);
    setShowAllAgents(false);
  };

  const handleDeleteAgent = (agentId: string) => {
    if (window.confirm('Are you sure you want to delete this agent?')) {
      setAgents(prev => prev.filter(agent => agent.id !== agentId));
      alert('Agent deleted successfully!');
    }
  };

  const handleAddPolicy = () => {
    if (!selectedAgent || !newPolicy.policyNumber || !newPolicy.customerName || !newPolicy.premium) {
      alert('Please fill in all policy fields');
      return;
    }

    const policy: Policy = {
      id: Date.now().toString(),
      policyNumber: newPolicy.policyNumber,
      policyType: newPolicy.policyType,
      customerName: newPolicy.customerName,
      premium: parseFloat(newPolicy.premium),
      status: newPolicy.status
    };

    setAgents(prev => prev.map(agent => 
      agent.id === selectedAgent.id 
        ? { ...agent, policies: [...agent.policies, policy] }
        : agent
    ));

    setSelectedAgent(prev => prev ? { ...prev, policies: [...prev.policies, policy] } : null);
    setNewPolicy({
      policyNumber: '',
      policyType: 'Life Insurance',
      customerName: '',
      premium: '',
      status: 'Active'
    });
    setShowAddPolicy(false);
    alert('Policy added successfully!');
  };

  const handleDeletePolicy = (policyId: string) => {
    if (!selectedAgent) return;
    
    if (window.confirm('Are you sure you want to delete this policy?')) {
      setAgents(prev => prev.map(agent => 
        agent.id === selectedAgent.id 
          ? { ...agent, policies: agent.policies.filter(p => p.id !== policyId) }
          : agent
      ));
      setSelectedAgent(prev => prev ? { ...prev, policies: prev.policies.filter(p => p.id !== policyId) } : null);
      alert('Policy deleted successfully!');
    }
  };

  const handleUpdateAgent = () => {
    if (!editingAgent) return;
    
    setAgents(prev => prev.map(agent => 
      agent.id === editingAgent.id ? editingAgent : agent
    ));
    setSelectedAgent(editingAgent);
    setEditingAgent(null);
    alert('Agent profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Agent Management Portal</h1>
          <p className="text-gray-600">Register new agents and provide secure login access.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Agent Registration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  {formData.name && formData.name.trim().length < 2 && (
                    <p className="text-xs text-red-500 mt-1">Name must be at least 2 characters</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  {formData.email && !validateEmail(formData.email) && (
                    <p className="text-xs text-red-500 mt-1">Please enter a valid email</p>
                  )}
                  {formData.email && validateEmail(formData.email) && checkDuplicateEmail(formData.email) && (
                    <p className="text-xs text-red-500 mt-1">This email is already registered</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  {formData.phone && !validatePhone(formData.phone) && (
                    <p className="text-xs text-red-500 mt-1">Please enter a valid phone number</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agent Number (Auto-generated)
                  </label>
                  <input
                    type="text"
                    name="agentCode"
                    value={formData.agentCode}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>

                <button
                  onClick={handleRegisterAgent}
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()}
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Register Agent
                </button>

                <button
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      agentCode: `AGENT-${Math.floor(100000 + Math.random() * 900000)}`
                    });
                  }}
                  className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                  Clear Form
                </button>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => {
                      setShowAllAgents(true);
                      setShowProfile(false);
                    }}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    View All Agents
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {showAllAgents && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">All Agents</h2>
                  <button
                    onClick={() => setShowAllAgents(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {agents.map(agent => (
                    <div key={agent.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
                          <p className="text-sm text-gray-600">{agent.email}</p>
                          <p className="text-sm text-gray-600">{agent.phone}</p>
                          <p className="text-sm font-mono text-gray-500 mt-1">{agent.agentCode}</p>
                          <p className="text-sm text-blue-600 mt-2">{agent.policies.length} policies onboarded</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewProfile(agent)}
                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
                            title="View Profile"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteAgent(agent.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                            title="Delete Agent"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showProfile && selectedAgent && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Agent Profile</h2>
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      setSelectedAgent(null);
                      setEditingAgent(null);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {editingAgent ? (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={editingAgent.name}
                        onChange={(e) => setEditingAgent({ ...editingAgent, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={editingAgent.email}
                        onChange={(e) => setEditingAgent({ ...editingAgent, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={editingAgent.phone}
                        onChange={(e) => setEditingAgent({ ...editingAgent, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleUpdateAgent}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditingAgent(null)}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-semibold text-gray-800">{selectedAgent.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Agent Code</p>
                        <p className="font-semibold text-gray-800 font-mono">{selectedAgent.agentCode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-800">{selectedAgent.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold text-gray-800">{selectedAgent.phone}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setEditingAgent(selectedAgent)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Onboarded Policies</h3>
                  <button
                    onClick={() => setShowAddPolicy(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center text-sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Policy
                  </button>
                </div>

                {showAddPolicy && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Add New Policy</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="policyNumber"
                        value={newPolicy.policyNumber}
                        onChange={handlePolicyChange}
                        placeholder="Policy Number"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <select
                        name="policyType"
                        value={newPolicy.policyType}
                        onChange={handlePolicyChange}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Life Insurance</option>
                        <option>Health Insurance</option>
                        <option>Auto Insurance</option>
                        <option>Home Insurance</option>
                        <option>Travel Insurance</option>
                      </select>
                      <input
                        type="text"
                        name="customerName"
                        value={newPolicy.customerName}
                        onChange={handlePolicyChange}
                        placeholder="Customer Name"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        name="premium"
                        value={newPolicy.premium}
                        onChange={handlePolicyChange}
                        placeholder="Premium Amount"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <button
                        onClick={handleAddPolicy}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Add Policy
                      </button>
                      <button
                        onClick={() => setShowAddPolicy(false)}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {selectedAgent.policies.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No policies onboarded yet.</p>
                  ) : (
                    selectedAgent.policies.map(policy => (
                      <div key={policy.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-800">{policy.policyNumber}</h4>
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                {policy.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{policy.policyType}</p>
                            <p className="text-sm text-gray-600">Customer: {policy.customerName}</p>
                            <p className="text-sm font-semibold text-gray-800 mt-1">
                              Premium: ${policy.premium.toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeletePolicy(policy.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                            title="Delete Policy"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {!showAllAgents && !showProfile && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Agent Selected</h3>
                <p className="text-gray-600">
                  Click "View All Agents" to see registered agents and their policies.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;