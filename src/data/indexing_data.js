const algoliasearch = require('algoliasearch');
const fs = require('fs');

// Initialize Algolia client
const client = algoliasearch('PZZB1KPYSS', '478a905c8af7c34bd97f025c3650270d');
const index = client.initIndex('Restaurants');

const jsonFilePath = 'C:/Users/OEM/Desktop/Algolia Assignment/Reactapp_plusFiles/my-app/src/data/combined_data.json';
const restaurants_list = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

console.log(restaurants_list.slice(0, 3));

// Save objects to Algolia
index.saveObjects(restaurants_list)
    .then(() => {
        console.log('Restaurants data uploaded successfully.');
    })
    .catch(err => {
        console.error('Error uploading restaurants data:', err);
    });
