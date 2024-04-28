const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Define route handler for the root route ("/")
app.get('/', (req, res) => {
  // Read the content of the JSON file
  fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading JSON file');
      return;
    }

    // Send the JSON data as a response
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// POST request
app.post('/', (req, res) => {
  // Assuming req.body contains the data you want to save
  const newData = req.body;
  // Here you can process the data, save it to a database, or perform any other necessary operations
  // For example, let's say you have a function to save data to a database
  saveDataToDatabase(newData)
    .then(() => {
      // If data is saved successfully, send back a response acknowledging the receipt of the data
      res.status(201).json({ message: 'Data received and saved successfully', data: newData });
    })
    .catch(error => {
      // If an error occurs while saving data, send back an error response
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data' });
    });
});

// Function to save data to a database (example)
function saveDataToDatabase(data) {
  // for demonstration purposes
  // You would replace this with your actual database saving logic
  return new Promise((resolve, reject) => {
    // Simulating a database operation with a timeout
    setTimeout(() => {
      // Assuming data is saved successfully
      resolve();
    }, 1000); // Simulate 1 second delay
  });
}

// PUT request
app.put('/', (req, res) => {
  // Assuming req.body contains the data you want to update
  const updatedData = req.body;
  // For demonstration purposes, let's log the updated data
  console.log('Updated data:', updatedData);

  // Now, you can perform database operations, such as updating the resource
  // For example, you might have a function to update the data in the database
  updateResourceInDatabase(updatedData)
    .then(() => {
      // If the resource is updated successfully, send a response
      res.status(200).json({ message: 'Resource updated successfully', data: updatedData });
    })
    .catch(error => {
      // If an error occurs during the update process, send an error response
      console.error('Error updating resource:', error);
      res.status(500).json({ message: 'Error updating resource' });
    });
});

// Function to update the resource in the database (example)
function updateResourceInDatabase(updatedData) {
  // This is just a placeholder function for demonstration purposes
  // You would replace this with your actual database update logic
  return new Promise((resolve, reject) => {
    // Simulate a database operation with a timeout
    setTimeout(() => {
      // Assuming the resource is updated successfully
      resolve();
    }, 1000); // Simulate 1 second delay
  });
}

// PATCH request
app.patch('/', (req, res) => {
  // Assuming req.body contains the partial data you want to update
  const partialData = req.body;
 // For example, if you have a function to update the resource in the database
  updateResourceInDatabase(partialData)
    .then(() => {
      // If the resource is updated successfully, send a response
      res.status(200).json({ message: 'Resource updated successfully', data: partialData });
    })
    .catch(error => {
      // If an error occurs during the update process, send an error response
      console.error('Error updating resource:', error);
      res.status(500).json({ message: 'Error updating resource' });
    });
});

// Function to update the resource in the database (example)
function updateResourceInDatabase(partialData) {
  // This is just a placeholder function for demonstration purposes
  // You would replace this with your actual database update logic
  return new Promise((resolve, reject) => {
    // Simulate a database operation with a timeout
    setTimeout(() => {
      // Assuming the resource is updated successfully
      resolve();
    }, 1000); // Simulate 1 second delay
  });
}


// DELETE request
app.delete('/', (req, res) => {
// For demonstration purposes, let's assume we have a function to delete the resource from the database
  deleteResourceFromDatabase()
    .then(() => {
      // If the resource is deleted successfully, send a response
      res.status(200).json({ message: 'Resource deleted successfully' });
    })
    .catch(error => {
      // If an error occurs during the deletion process, send an error response
      console.error('Error deleting resource:', error);
      res.status(500).json({ message: 'Error deleting resource' });
    });
});

// Function to delete the resource from the database (example)
function deleteResourceFromDatabase() {
  // This is just a placeholder function for demonstration purposes
  // You would replace this with your actual database deletion logic
  return new Promise((resolve, reject) => {
    // Simulate a database operation with a timeout
    setTimeout(() => {
      // Assuming the resource is deleted successfully
      resolve();
    }, 1000); // Simulate 1 second delay
  });
}

// OPTIONS request
app.options('/', (req, res) => {
// For demonstration purposes, let's just send back a response with the allowed methods
  res.setHeader('Allow', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.status(200).send('Allowed methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
});

// HEAD request
app.head('/', (req, res) => {
  // For demonstration purposes, let's just send back a response acknowledging the receipt of the request
  res.status(200).send('HEAD request received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
