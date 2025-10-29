# CRM application API services

### Environment varibles
Create a `.env` file on the root directory and modify these variables accroding to the intended environment
```
DB_SCHEME= jdbc:postgresql
DB_HOST= localhost
DB_PORT= 5432
DB_DATABASE= postgres
DB_USER= postgres
DB_PASSWORD= postgres
SERVER_PORT= 5000
```

### DB prepararion
Run the following command to prepare DB with Flyway 
`node --run db-migrate`