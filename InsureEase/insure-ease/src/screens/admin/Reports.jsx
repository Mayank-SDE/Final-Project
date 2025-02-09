import  { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Table, Row, Col } from 'reactstrap';
import { Line, Bar } from 'react-chartjs-2';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles

// Dummy data for reports
const policyStatsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Policies Sold',
      data: [20, 45, 50, 55, 70, 90, 110],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }
  ]
};

const customerStatsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'New Customers',
      data: [10, 30, 35, 50, 65, 85, 100],
      fill: false,
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.1
    }
  ]
};

const Reports = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);

  const handleGenerateReport = () => {
    if (!startDate || !endDate) {
      toast.error('Please select both start and end date.');
      return;
    }
    toast.success('Report generated successfully!');
  };

  return (
    <div className="reports">
      <Row>
        {/* Date Picker */}
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Select Date Range</CardTitle>
              <div className="mb-3">
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Select Start Date"
                  className="form-control"
                />
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Select End Date"
                  className="form-control mt-2"
                />
              </div>
              <Button color="primary" onClick={handleGenerateReport}>Generate Report</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Report Charts */}
      <Row className="my-4">
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Policies Sold (Monthly)</CardTitle>
              <Line data={policyStatsData} />
            </CardBody>
          </Card>
        </Col>

        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">New Customers (Monthly)</CardTitle>
              <Bar data={customerStatsData} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Recent Activity</CardTitle>
              <Table striped>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Policy #12345 Created</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>Claim #54321 Approved</td>
                    <td>1 hour ago</td>
                  </tr>
                  <tr>
                    <td>Policy #98765 Renewed</td>
                    <td>5 hours ago</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default Reports;
