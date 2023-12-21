const algoliasearch = require('algoliasearch');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Initialize Algolia client
const client = algoliasearch('CUS7UD5Y0M', '6a1e157d5903e221753fa656a6c6de7d');
const index = client.initIndex('dev_Restaurants');

const jsonFilePath = 'C:/Users/OEM/Desktop/Algolia Assignment/my-app/src/data/restaurants_list.json';
const csvFilePath = 'C:/Users/OEM/Desktop/Algolia Assignment/my-app/src/data/restaurants_info.csv';


function parseCSVManually() {
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');
  const lines = fileContent.split('\n').filter(line => line.trim()); // Filter out empty lines
  const headings = lines[0].split(';'); // Assuming ';' is your delimiter

  const restaurants_info = lines.slice(1).map(line => {
    const values = line.split(';');
    return headings.reduce((obj, heading, index) => {
      obj[heading] = values[index];
      return obj;
    }, {});
  });

  // console.log('Parsed CSV Data:', restaurants_info); // Debugging log
  return restaurants_info;
}

function combineData() {
  const restaurants_info = parseCSVManually();
  if (!restaurants_info) {
    console.error('Failed to parse CSV data.');
    return;
  }

  const restaurants_list = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

  // Creating a map from restaurants_info
  const infoMap = new Map(restaurants_info.map(info => [info.objectId, info]));

  // Merging data
  const combinedData = restaurants_list.map(item => {
    return { ...item, ...infoMap.get(item.objectId) };
  });

  // console.log('Combined Data:', combinedData);
  return combinedData;
}

combined_data = combineData();


console.log(combined_data);

// index.saveObjects(combined_data)

