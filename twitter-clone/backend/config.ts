import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface ENV {
  PORT: string;
  MONGODB_ATLAS: string;
  SECRET_KEY: string;
}

interface Config {
  PORT: string;
  MONGODB_ATLAS: string;
  SECRET_KEY: string;
}


const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT,
    MONGODB_ATLAS: process.env.MONGODB_ATLAS,
    SECRET_KEY: process.env.SECRET_KEY
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
