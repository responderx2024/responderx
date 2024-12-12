const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/connectDB');

// * controllers
const userController = require('./controllers/userController');
const reportController = require('./controllers/reportController');
const resourceController = require('./controllers/resourceController');
const statsController = require('./controllers/statController');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Set the frontend folder as the static folder
app.use(express.static(path.join(__dirname, './frontend')));

// Serve index.html on the / endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/landing.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/register.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/dashboard.html'));
});

app.get('/volunteer_dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/volunteer_dashboard.html'));
});

app.get('/volunteer_reporting', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/volunteer_reporting.html'));
});

app.get('/submit_report', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/incident_reporting.html'));
});

app.get('/reports', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/view_reports.html'));
});

app.get('/view_report', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/report_detail.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/admin.html'));
});

app.get('/government', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/government.html'));
});

app.get('/ration_management', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/ration.html'));
});

app.get('/register_volunteer', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/volunteers.html'));
});

app.get('/all_volunteers', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/all_volunteers.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/contact.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/chatbot.html'));
});

app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/resources.html'));
});

app.get('/donate', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/donate.html'));
});

app.get('/donate/money', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/donate_money.html'));
});

app.get('/donate/resources', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/donate_resources.html'));
});

app.get('/view_donations', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/view_donations.html'));
});

app.get('/view_resources', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/view_resources.html'));
});

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/logout.html'));
});

// Backend routes
app.use('/api/users', userController);
app.use('/api/reports', reportController);
app.use('/api/resources', resourceController);
app.use('/api/stats', statsController);

app.listen(port, () => {
  console.log(`ResponderX listening at http://localhost:${port}`);
});
