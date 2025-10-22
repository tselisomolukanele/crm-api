# CRM application API services

### Environment varibles
Create a `.env` file on the root directory and modify these variables accroding to the intended environment
```
DB_URL= jdbc:postgresql://localhost:5432/postgres
DB_USER= postgres
DB_PASSWORD= postgress
```

### DB prepararion
Run the following command to prepare DB with Flyway 
`node --run flyway:migrate`