DROP KEYSPACE IF EXISTS udemy;
DROP TABLE IF EXISTS udemy.homes;
CREATE KEYSPACE IF NOT EXISTS udemy WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE udemy;

CREATE TABLE udemy.homes(
   id INT PRIMARY KEY,
   address TEXT,
   dateOfPosting TEXT,
   status TEXT,
   numberOfLikes INT,
   numberOfBathroom INT,
   numberOfBedroom INT,
   homeValue INT,
   sqft INT,
   cityName TEXT,
   stateName TEXT,
   zipCode TEXT,
   homeImage TEXT
);

COPY udemy.homes (id, address, dateOfPosting, status, numberOfLikes, numberOfBathroom, numberOfBedroom, homeValue, sqft, cityName, stateName, zipCode, homeImage) FROM '/Users/kathrynhoesley/Desktop/nearby-homes/data.csv' WITH DELIMITER=',' AND HEADER=TRUE;