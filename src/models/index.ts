import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

let db: PrismaClient;

declare global {
  var __db: PrismaClient<any, never, DefaultArgs> | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export { db };
