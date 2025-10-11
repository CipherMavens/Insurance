import { useState } from 'react';
import { Search, Bell, User, Eye, Send, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Proposal {
  id: string;
  agentNumber: string;
  agentName: string;
  submissionDate: string;
  status: 'Pending' | 'Review' | 'Forwarded' | 'Approved' | 'Rejected';
}

 function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  const proposals: Proposal[] = [
    { id: 'PROP-001-A', agentNumber: 'A102', agentName: 'Alice Johnson', submissionDate: '2024-03-01', status: 'Pending' },
    { id: 'PROP-002-B', agentNumber: 'B205', agentName: 'Bob Smith', submissionDate: '2024-03-02', status: 'Review' },
    { id: 'PROP-003-C', agentNumber: 'C108', agentName: 'Charlie Brown', submissionDate: '2024-03-03', status: 'Pending' },
    { id: 'PROP-004-D', agentNumber: 'D301', agentName: 'Diana Prince', submissionDate: '2024-03-04', status: 'Forwarded' },
    { id: 'PROP-005-E', agentNumber: 'E156', agentName: 'Eve Adams', submissionDate: '2024-03-05', status: 'Pending' },
  ];

  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = proposal.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         proposal.agentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         proposal.agentNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || proposal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-pink-100 text-pink-600';
      case 'Review': return 'bg-green-100 text-green-600';
      case 'Forwarded': return 'bg-gray-100 text-gray-600';
      case 'Approved': return 'bg-blue-100 text-blue-600';
      case 'Rejected': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const handleApprove = (proposalId: string) => {
    console.log('Approved:', proposalId);
    alert(`Proposal ${proposalId} has been approved`);
  };

  const handleReject = (proposalId: string) => {
    console.log('Rejected:', proposalId);
    alert(`Proposal ${proposalId} has been rejected`);
  };

  const handleViewDetails = (proposal: Proposal) => {
    setSelectedProposal(proposal);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Insurance Portal</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <span className="text-sm">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 bg-pink-50 text-pink-600 border-l-4 border-pink-600">
            <span className="text-sm font-medium">Proposals</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <span className="text-sm">Agents</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <span className="text-sm">Reports</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <span className="text-sm">Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search proposals, agents..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-6">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5 text-gray-600" />
              </button>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Proposals Dashboard</h2>

          {/* Stats Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview</h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Pending</span>
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">3</div>
                <div className="text-xs text-green-600 mt-1">-5% from last month</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Needs Review</span>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">1</div>
                <div className="text-xs text-gray-500 mt-1">Steady</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Approved Last Week</span>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">0</div>
                <div className="text-xs text-green-600 mt-1">+10% from last week</div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rejected Last Month</span>
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800">0</div>
                <div className="text-xs text-red-600 mt-1">-2% from last month</div>
              </div>
            </div>
          </div>

          {/* Proposals Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Proposals Pending Review</h3>
            </div>

            {/* Filters */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by ID or Agent Name..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Review">Review</option>
                <option value="Forwarded">Forwarded</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proposal ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProposals.map((proposal) => (
                    <tr key={proposal.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{proposal.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{proposal.agentNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{proposal.agentName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{proposal.submissionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(proposal.status)}`}>
                          {proposal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center space-x-2">
                          <button 
                            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                            onClick={() => handleViewDetails(proposal)}
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                            <Send className="w-4 h-4" />
                            <span>Forward</span>
                          </button>
                          <button 
                            className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 flex items-center space-x-1"
                            onClick={() => handleApprove(proposal.id)}
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>Approve</span>
                          </button>
                          <button 
                            className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 flex items-center space-x-1"
                            onClick={() => handleReject(proposal.id)}
                          >
                            <XCircle className="w-3 h-3" />
                            <span>Reject</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {filteredProposals.length} of {proposals.length} proposals
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button 
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedProposal(null)}>
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Proposal Details</h3>
              <button onClick={() => setSelectedProposal(null)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Proposal ID</label>
                  <p className="text-gray-900 font-semibold">{selectedProposal.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <p><span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(selectedProposal.status)}`}>{selectedProposal.status}</span></p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Agent Name</label>
                  <p className="text-gray-900">{selectedProposal.agentName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Agent Number</label>
                  <p className="text-gray-900">{selectedProposal.agentNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Submission Date</label>
                  <p className="text-gray-900">{selectedProposal.submissionDate}</p>
                </div>
              </div>
              <div className="pt-6 flex space-x-3">
                <button 
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2"
                  onClick={() => {
                    handleApprove(selectedProposal.id);
                    setSelectedProposal(null);
                  }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button 
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center space-x-2"
                  onClick={() => {
                    handleReject(selectedProposal.id);
                    setSelectedProposal(null);
                  }}
                >
                  <XCircle className="w-4 h-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Dashboard;