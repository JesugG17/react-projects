import path from 'path';
import dotenv from 'dotenv';

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface ENV {
  PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
}

interface Config {
  PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
}

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
