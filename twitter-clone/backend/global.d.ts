declare global {
  namespace Express {
    export interface Request {}
  }

  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_ATLAS: string;
      PORT: string;
      SECRET_KEY: string;
    }
  }
}

export {};
