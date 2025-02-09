import { Line, Bar, Pie } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, Table, Row, Col, Container } from 'reactstrap'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
);

// Sample chart data
const policyChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Active Policies',
      data: [20, 45, 50, 55, 70, 90, 110],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }
  ]
};

const genderChartData = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: 'Customer Gender Distribution',
      data: [65, 35],
      backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }
  ]
};

const policyPurchaseChartData = {
  labels: ['Life Insurance', 'Health Insurance', 'Car Insurance', 'Home Insurance'],
  datasets: [
    {
      label: 'Policies Purchased',
      data: [120, 150, 80, 50],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1
    }
  ]
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container fluid>
        {/* Dashboard Header */}
        <Row className="my-4">
          <Col>
            <h2>Dashboard</h2>
            <p>Welcome back, Admin. Here`&apos;s an overview of the insurance system.</p>
          </Col>
        </Row>

        {/* Stats and Quick Actions */}
        <Row>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Total Policies</CardTitle>
                <h2>320</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Active Policies</CardTitle>
                <h2>280</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Pending Claims</CardTitle>
                <h2>12</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">New Policies</CardTitle>
                <h2>15</h2>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Gender Distribution Chart */}
        <Row className="my-4">
          <Col md="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Customer Gender Distribution</CardTitle>
                <Pie data={genderChartData} />
              </CardBody>
            </Card>
          </Col>

          {/* Policy Purchase Chart */}
          <Col md="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Policies Purchased</CardTitle>
                <Bar data={policyPurchaseChartData} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Active Policies Chart */}
        <Row className="my-4">
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Active Policies Over Time</CardTitle>
                <Line data={policyChartData} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Recent Activity */}
        <Row className="my-4">
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

        {/* Policy List Section */}
        <Row className="my-4">
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Active Policies List</CardTitle>
                <Table striped>
                  <thead>
                    <tr>
                      <th>Policy ID</th>
                      <th>Policy Holder</th>
                      <th>Status</th>
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>John Doe</td>
                      <td>Active</td>
                      <td>12/31/2024</td>
                    </tr>
                    <tr>
                      <td>#67890</td>
                      <td>Jane Smith</td>
                      <td>Active</td>
                      <td>11/15/2024</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
