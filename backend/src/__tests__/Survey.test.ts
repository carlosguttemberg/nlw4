import request from "supertest"
import { app } from "../app"

import createConnection from "../database"
import { Connection } from 'typeorm';

let connection: Connection;

describe("Surveys",() => {
    
    beforeAll(async () => {
        connection = await createConnection('nlw4-test');
        await connection.query('DROP TABLE IF EXISTS surveys_users');
        await connection.query('DROP TABLE IF EXISTS surveys');
        await connection.query('DROP TABLE IF EXISTS users');
        await connection.query('DROP TABLE IF EXISTS migrations');
        await connection.runMigrations();
    });

    it("Should be create a new survey", async () => {
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example",
            description: "Description Example"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Title Example 2 ",
            description: "Description Example 2"
        });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
        
    })

})