const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

let db;
console.log("MONGO_URI:", MONGO_URI); // Add this line above MongoClient.connect()


// Connect to MongoDB
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db(); // Use the default database from URI
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running successfully');
});

app.post('/api/insertcontact', async (req, res) => {
  try {
    const result = await db.collection('contacts').insertOne(req.body);
    res.status(201).json({ success: true, message: 'Form submitted', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Submission failed' });
  }
});

app.post('/api/insertregister', async (req, res) => {
  try {
    const result = await db.collection('registrations').insertOne(req.body);
    res.status(201).json({ success: true, message: 'Registered', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

app.post('/api/insertlogin', async (req, res) => {
  try {
    const result = await db.collection('logins').insertOne(req.body);
    res.status(201).json({ success: true, message: 'Login saved', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Login submission failed' });
  }
});

app.post('/api/insertblog', async (req, res) => {
  try {
    const result = await db.collection('blogs').insertOne(req.body);
    res.status(201).json({ success: true, message: 'Blog added', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Blog submission failed' });
  }
});

app.post('/viewblogbyid', async (req, res) => {
  try {
    const blog = await db.collection('blogs').findOne({ _id: new ObjectId(req.body.id) });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving blog' });
  }
});

app.post('/api/deleteblogbyid', async (req, res) => {
  try {
    const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(req.body.id) });
    if (result.deletedCount === 0)
      return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, message: 'Blog deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error deleting blog' });
  }
});

app.get('/viewenquiries', async (req, res) => {
  try {
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving contacts' });
  }
});

app.get('/viewregisteration', async (req, res) => {
  try {
    const registrations = await db.collection('registrations').find().toArray();
    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving registrations' });
  }
});

app.get('/viewblogs', async (req, res) => {
  try {
    const blogs = await db.collection('blogs').find().toArray();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving blogs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
