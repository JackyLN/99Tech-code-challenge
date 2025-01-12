import { Sequelize } from "sequelize";
import config from "./config/config";

// Get the environment from NODE_ENV or default to 'development'
const env = process.env.NODE_ENV || "development";

// Load the appropriate config for the current environment
const dbConfig = (config as any)[env];

// Create a Sequelize instance
const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	{
		host: dbConfig.host,
		port: dbConfig.port,
		dialect: dbConfig.dialect,
		logging: false, // Disable logging; set to true for debugging
	}
);

export default sequelize;
