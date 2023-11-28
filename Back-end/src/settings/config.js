import 'dotenv/config';

export const config = {
  port: process.env.PORT || 4000,
  mongo: process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/',
 jwt_secret: process.env.JWT_SECRET || 'secret',
  database: process.env.DATABASE_NAME || 'blog-app',
};