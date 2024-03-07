import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CartOrm } from "./orms/cart.orm";

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) ?? 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [CartOrm],
    synchronize: true
  }