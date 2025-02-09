import  { useState } from 'react';
import { Card, CardBody, CardTitle, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

// Dummy customer data
const generateDummyCustomerData = () => {
  const statuses = ['Active', 'Inactive', 'Pending'];
  const customerNames = ['John Doe', 'Jane Smith', 'Emily White', 'Michael Green', 'James Brown', 'Sarah Lee'];

  let data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      customerId: `C${10000 + i}`,
      name: customerNames[i % customerNames.length],
      email: `customer${i}@example.com`,
      phone: `123-456-789${i}`,
      status: statuses[i % statuses.length],
    });
  }
  return data;
};

const ManageCustomers = () => {
  const [customers, setCustomers] = useState(generateDummyCustomerData());
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle adding a new customer
  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phone || !newCustomer.status) {
      toast.error('Please fill all fields');
      return;
    }
    setCustomers([...customers, { ...newCustomer, customerId: `C${10000 + customers.length}` }]);
    setNewCustomer({ name: '', email: '', phone: '', status: '' });
    toggleModal();
    toast.success('Customer added successfully!');
  };

  // Handle sorting
  const handleSort = (column) => {
    const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: column, direction });

    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
      if (a[column] < b[column]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setFilteredCustomers(sortedCustomers);
  };

  // Handle pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle filtering
  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = customers.filter((customer) => customer.name.toLowerCase().includes(query));
    setFilteredCustomers(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Handle delete customer
  const handleDeleteCustomer = (customerId) => {
    const updatedCustomers = customers.filter(customer => customer.customerId !== customerId);
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
    toast.success('Customer deleted successfully!');
  };

  return (
    <div className="manage-customers">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Manage Customers</CardTitle>
          {/* Filter Input */}
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Search by Customer Name"
              onChange={handleFilter}
            />
          </div>

          {/* Button to trigger modal for adding a new customer */}
          <Button color="primary" className="mb-3 mr-3" onClick={toggleModal}>Add New Customer</Button>

          {/* Table displaying the list of customers */}
          <Table striped className="my-3">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>Customer Name</th>
                <th onClick={() => handleSort('email')}>Email</th>
                <th onClick={() => handleSort('phone')}>Phone</th>
                <th onClick={() => handleSort('status')}>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map(customer => (
                <tr key={customer.customerId}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.status}</td>
                  <td>
                    <Button color="warning" size="sm" className="mr-2" onClick={() => toast.info(`Editing ${customer.customerId}`)}>Edit</Button>
                    <Button color="danger" size="sm" className="mr-2" onClick={() => handleDeleteCustomer(customer.customerId)}>Delete</Button>
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
                disabled={currentPage === Math.ceil(filteredCustomers.length / customersPerPage)}
                onClick={() => paginate(currentPage + 1)}
                size="sm"
                className="mr-2"
              >
                Next <i className="fa fa-arrow-right"></i>
              </Button>
            </div>
            <span>Page {currentPage} of {Math.ceil(filteredCustomers.length / customersPerPage)}</span>
          </div>
        </CardBody>
      </Card>

      {/* Modal for adding a new customer */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Customer</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Customer Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newCustomer.name}
                onChange={handleInputChange}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={newCustomer.email}
                onChange={handleInputChange}
                placeholder="Enter Customer Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={newCustomer.phone}
                onChange={handleInputChange}
                placeholder="Enter Customer Phone"
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newCustomer.status}
                onChange={handleInputChange}
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddCustomer}>Add Customer</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default ManageCustomers;
