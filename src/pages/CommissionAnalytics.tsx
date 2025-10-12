import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  FileText,
  
  Users,
  FileCheck,
  DollarSign,
  Calendar,
  
} from "lucide-react";

interface Policy {
  id: string;
  customerName: string;
  policyType: string;
  policyNumber: string;
  startDate: string;
  expiryDate: string;
  status: "Active" | "Pending" | "Expired" | "Cancelled";
}

interface Stats {
  totalCustomers: number;
  activePolicies: number;
  pendingRenewals: number;
  claimsProcessed: number;
}

const InsuranceCompanyView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPolicyType, setSelectedPolicyType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const stats: Stats = {
    totalCustomers: 5230,
    activePolicies: 3890,
    pendingRenewals: 450,
    claimsProcessed: 89,
  };

  const policies: Policy[] = [
    {
      id: "1",
      customerName: "John Doe",
      policyType: "Life Insurance",
      policyNumber: "LI-POL-2023",
      startDate: "2023-01-15",
      expiryDate: "2025-01-15",
      status: "Active",
    },
    {
      id: "2",
      customerName: "Jane Smith",
      policyType: "Health Insurance",
      policyNumber: "HI-POL-2021",
      startDate: "2021-03-20",
      expiryDate: "2024-03-20",
      status: "Pending",
    },
    {
      id: "3",
      customerName: "Robert Johnson",
      policyType: "Auto Insurance",
      policyNumber: "AI-POL-2023",
      startDate: "2023-06-10",
      expiryDate: "2024-06-10",
      status: "Active",
    },
    {
      id: "4",
      customerName: "Emily Davis",
      policyType: "Property Insurance",
      policyNumber: "PR-POL-2022",
      startDate: "2022-11-05",
      expiryDate: "2024-11-05",
      status: "Expired",
    },
    {
      id: "5",
      customerName: "Michael Brown",
      policyType: "Life Insurance",
      policyNumber: "LI-POL-2023",
      startDate: "2023-02-18",
      expiryDate: "2025-02-18",
      status: "Active",
    },
    {
      id: "6",
      customerName: "Sarah Wilson",
      policyType: "Travel Insurance",
      policyNumber: "TR-POL-2024",
      startDate: "2024-07-22",
      expiryDate: "2024-08-22",
      status: "Cancelled",
    },
    {
      id: "7",
      customerName: "David Lee",
      policyType: "Travel Insurance",
      policyNumber: "TR-POL-2023",
      startDate: "2024-01-08",
      expiryDate: "2025-01-08",
      status: "Pending",
    },
    {
      id: "8",
      customerName: "Anonymous Customer",
      policyType: "Auto Insurance",
      policyNumber: "AI-POL-2021",
      startDate: "2021-09-14",
      expiryDate: "2024-09-14",
      status: "Active",
    },
  ];

  const policyDistribution = [
    { type: "Life Insurance", count: 1850, color: "bg-red-500" },
    { type: "Health Insurance", count: 1420, color: "bg-red-400" },
    { type: "Auto Insurance", count: 890, color: "bg-red-300" },
    { type: "Property Insurance", count: 520, color: "bg-red-200" },
    { type: "Travel Insurance", count: 210, color: "bg-red-100" },
  ];

  const maxCount = Math.max(...policyDistribution.map((p) => p.count));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Expired":
        return "bg-red-100 text-red-700 border-red-200";
      case "Cancelled":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch =
      policy.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedPolicyType === "all" || policy.policyType === selectedPolicyType;
    const matchesStatus =
      selectedStatus === "all" || policy.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Insurance Company View</h1>
                <p className="text-red-100 text-sm">
                  Bancassurance Management System
                </p>
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Total Customers
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.totalCustomers.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Across all products
                </p>
              </div>
              <Users className="h-12 w-12 text-blue-500 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Active Policies
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.activePolicies.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">Currently in force</p>
              </div>
              <FileCheck className="h-12 w-12 text-green-500 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Pending Renewals
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.pendingRenewals}
                </p>
                <p className="text-xs text-gray-400 mt-1">Due within 30 days</p>
              </div>
              <Calendar className="h-12 w-12 text-orange-500 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Claims Processed
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.claimsProcessed}
                </p>
                <p className="text-xs text-gray-400 mt-1">This month</p>
              </div>
              <DollarSign className="h-12 w-12 text-purple-500 opacity-80" />
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Filter Policyholders
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Search and filter from all records across all insurance companies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or policy number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedPolicyType}
              onChange={(e) => setSelectedPolicyType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">Policy Type - All</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Auto Insurance">Auto Insurance</option>
              <option value="Property Insurance">Property Insurance</option>
              <option value="Travel Insurance">Travel Insurance</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">Policy Status - All</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Expired">Expired</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              Apply Filters
            </button>
          </div>

          <button className="mt-4 text-red-600 text-sm font-medium hover:underline">
            Clear Filters
          </button>
        </div>

        {/* Policyholder Details Table */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Policyholder Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Displaying {filteredPolicies.length} of {policies.length}{" "}
                  total policies
                </p>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Policy Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Policy Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPolicies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {policy.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {policy.policyType}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                      {policy.policyNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {policy.startDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {policy.expiryDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          policy.status
                        )}`}
                      >
                        {policy.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Policy Type Distribution Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Policy Type Distribution
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Number of Policies by Type
          </p>

          <div className="space-y-4">
            {policyDistribution.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 font-medium">{item.type}</span>
                  <span className="text-gray-600">
                    {item.count.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                  <div
                    className={`${item.color} h-full flex items-center justify-end pr-3 text-white text-xs font-medium transition-all duration-500`}
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  >
                    {item.count > 500 && `${item.count}`}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm">
            <span className="text-gray-600">Total Policies</span>
            <span className="text-gray-800 font-semibold text-lg">
              {policyDistribution
                .reduce((sum, item) => sum + item.count, 0)
                .toLocaleString()}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsuranceCompanyView;
