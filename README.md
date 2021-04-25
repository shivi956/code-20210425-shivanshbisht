# code-20210425-shivanshbisht

## Nodejs BMI

This is totally a backend application totally built in Node js. The database used in this project is MongoDB.
List of npm packages used:

1. Express :  helps in fast-tracking development of server-based applications.
2. Mongoose : used to translate between objects in code and the representation of those objects in MongoDB.
3. dotenv : allows you to separate secrets from your source code.

This application accepts data in json , example:  {"Gender": "Male", "HeightCm": 171, "WeightKg": 96 } and give result about the BMI index ,BMI_category and Health Risk and also 
count of the person fall in each category.

Formula - BMI

BMI(kg/m^2 ) = mass(kg) / height(m)^2

BMI Category 

1.Underweight -> >=18.4 
2.Normal weight -> 18.5 to 24.9
3.Overweight -> 25 to 29.9
4.Moderately obese -> 30 to 34.9
5.Severely obese -> 35 to 39.9
6.Very severely obese -> >=40

Health risk 

1.Malnutrition risk 
2.Low risk 
3.Enhanced risk 
4.Medium risk 
5.High risk 
6.Very high risk

### List of api endpoints

#### (GET)
1. /bmi/allbmidata -> Returns all data stored.
2. /bmi/underweight -> Returns all underweight data.
3. /bmi/normalweight -> Returns all normal weight data.
4. /bmi/overweight -> Returns all overweight data.
5. /bmi/moderatelyobese -> Returns all moderately obese data.
6. /bmi/severlyobese -> Returns all severly obese data.
7. /bmi/veryseverlyobese -> Returns all very severly obese data.
8. /bmi/UWcount -> Returns all underweight data count.
9. /bmi/NWcount -> Returns all normal weight data count.
10. /bmi/OWcount -> Returns all overweight data count.
11. /bmi/MOcount -> Returns all moderately obese data count.
12. /bmi/SOcount -> Returns all severly obese data count.
13. /bmi/VSOcount -> Returns all very severly obese data count.

#### (POST)
1. /bmi/ -> Used to store all  the json data to  DB(after all processing and calculation data is stored in DB).

#### (DELETE)
1. /bmi/all -> Used to delete all stored data.


### Performance optimization 

Used indexing over the BMI_category which makes the data retrieval faster and we won't expreience any delays. 




