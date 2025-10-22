
import dotenv from 'dotenv';
import { Flyway } from "node-flyway";

dotenv.config();

const flyway = new Flyway(
    {
        url: process.env.DB_URL,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        defaultSchema: "public",
        migrationLocations: ["filesystem:./migrations"]
    }
);

function migrate() {
  flyway.migrate().then(response => {
    if(!response.success) {
      throw new Error(`Unable to execute migrate command. Error: ${JSON.stringify(response)}`);
    }
    else {
      console.log(`Migrations applied successfully. Details: ${JSON.stringify(response)}`);
    }
  });
}

function clean() {
  flyway.clean().then(response => {
    if(!response.success) {
      throw new Error(`Unable to execute clean command. Error: ${JSON.stringify(response)}`);
    }
    else {
      console.log(`Clean applied successfully. Details: ${JSON.stringify(response)}`);
    }
  });
}

switch (process.argv[2]) {
  case "migrate":
    migrate();
    break;
  case "clean":
    clean();
    break;
  default:
    console.log("Please provide a valid command: migrate | clean");
}