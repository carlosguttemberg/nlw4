import request from "supertest"
import { app } from "../app"

import createConnection from "../database"
import { Connection, getConnection } from 'typeorm';

let connection: Connection;

describe("Users",() => {
    
    beforeAll(async () => {
        connection = await createConnection('nlw4-test');
        await connection.query('DROP TABLE IF EXISTS surveys');
        await connection.query('DROP TABLE IF EXISTS users');
        await connection.query('DROP TABLE IF EXISTS migrations');
        await connection.runMigrations();
    });

    it("Should be create a new user", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });
})