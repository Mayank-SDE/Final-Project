import  { useState } from 'react';
import { Card, CardBody, CardTitle, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

// Generate some dummy data for the policies
const generateDummyData = () => {
  const statuses = ['Active', 'Expired', 'Pending'];
  const policyHolders = ['John Doe', 'Jane Smith', 'Sarah Lee', 'James Brown', 'Emily White', 'Michael Green'];
  let data = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      policyId: `P${10000 + i}`,
      policyHolder: policyHolders[i % policyHolders.length],
      status: statuses[i % statuses.length],
      expiryDate: `2024-${(i % 12) + 1}-01`,
    });
  }

  return data;
};

const ManagePolicies = () => {
  const [policies, setPolicies] = useState(generateDummyData());
  const [filteredPolicies, setFilteredPolicies] = useState(policies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPolicy, setNewPolicy] = useState({ policyId: '', policyHolder: '', status: '', expiryDate: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [policiesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: 'policyId', direction: 'asc' });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({
      ...newPolicy,
      [name]: value,
    });
  };

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle adding a new policy
  const handleAddPolicy = () => {
    if (!newPolicy.policyId || !newPolicy.policyHolder || !newPolicy.status || !newPolicy.expiryDate) {
      toast.error('Please fill all fields');
      return;
    }
    setPolicies([...policies, newPolicy]);
    setNewPolicy({ policyId: '', policyHolder: '', status: '', expiryDate: '' });
    toggleModal();
    toast.success('Policy added successfully!');
  };

  // Handle sorting
  const handleSort = (column) => {
    const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: column, direction });

    const sortedPolicies = [...filteredPolicies].sort((a, b) => {
      if (a[column] < b[column]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setFilteredPolicies(sortedPolicies);
  };

  // Handle pagination
  const indexOfLastPolicy = currentPage * policiesPerPage;
  const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage;
  const currentPolicies = filteredPolicies.slice(indexOfFirstPolicy, indexOfLastPolicy);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle filtering
  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = policies.filter((policy) => policy.policyHolder.toLowerCase().includes(query));
    setFilteredPolicies(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Handle delete policy
  const handleDeletePolicy = (policyId) => {
    const updatedPolicies = policies.filter(policy => policy.policyId !== policyId);
    setPolicies(updatedPolicies);
    setFilteredPolicies(updatedPolicies);
    toast.success('Policy deleted successfully!');
  };

  return (
    <div className="manage-policies">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Manage Policies</CardTitle>
          {/* Filter Input */}
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Search by Policy Holder"
              onChange={handleFilter}
            />
          </div>

          {/* Button to trigger modal for adding a new policy */}
          <Button color="primary" className="mb-3 mr-3" onClick={toggleModal}>Add New Policy</Button>

          {/* Table displaying the list of policies */}
          <Table striped className="my-3">
            <thead>
              <tr>
                <th onClick={() => handleSort('policyId')}>Policy ID</th>
                <th onClick={() => handleSort('policyHolder')}>Policy Holder</th>
                <th onClick={() => handleSort('status')}>Status</th>
                <th onClick={() => handleSort('expiryDate')}>Expiry Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPolicies.map(policy => (
                <tr key={policy.policyId}>
                  <td>{policy.policyId}</td>
                  <td>{policy.policyHolder}</td>
                  <td>{policy.status}</td>
                  <td>{policy.expiryDate}</td>
                  <td>
                    <Button color="warning" size="sm" className="mr-2" onClick={() => toast.info(`Editing ${policy.policyId}`)}>Edit</Button>
                    <Button color="danger" size="sm" className="mr-2" onClick={() => handleDeletePolicy(policy.policyId)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                color="secondary"
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                size="sm"
                className="mr-2"
              >
                <i className="fa fa-arrow-left"></i> Previous
              </Button>
              <Button
                color="secondary"
                disabled={currentPage === Math.ceil(filteredPolicies.length / policiesPerPage)}
                onClick={() => paginate(currentPage + 1)}
                size="sm"
                className="mr-2"
              >
                Next <i className="fa fa-arrow-right"></i>
              </Button>
            </div>
            <span>Page {currentPage} of {Math.ceil(filteredPolicies.length / policiesPerPage)}</span>
          </div>
        </CardBody>
      </Card>

      {/* Modal for adding a new policy */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Policy</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="policyId">Policy ID</Label>
              <Input
                type="text"
                name="policyId"
                id="policyId"
                value={newPolicy.policyId}
                onChange={handleInputChange}
                placeholder="Enter Policy ID"
              />
            </FormGroup>
            <FormGroup>
              <Label for="policyHolder">Policy Holder</Label>
              <Input
                type="text"
                name="policyHolder"
                id="policyHolder"
                value={newPolicy.policyHolder}
                onChange={handleInputChange}
                placeholder="Enter Policy Holder Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newPolicy.status}
                onChange={handleInputChange}
              >
                <option>Active</option>
                <option>Expired</option>
                <option>Pending</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="expiryDate">Expiry Date</Label>
              <Input
                type="date"
                name="expiryDate"
                id="expiryDate"
                value={newPolicy.expiryDate}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddPolicy}>Add Policy</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default ManagePolicies;
