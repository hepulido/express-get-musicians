// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician, Band } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('/musicians endpoint', () => {
    it("returns all musicians", async () => {
        const response = await request(app).get("/musicians")
        expect(response.body.length).toBe(3)
    })
   
    it("returns 200 status", async () => {
        const response = await request(app).get("/musicians")
        expect(response.statusCode).toBe(200)
    })
    
    it("returns all musicians", async () => {
        const response = await request(app).get("/musicians")
        const responseData = JSON.parse(response.text)
        expect(responseData.length).toBe(3)
    })
    
})
describe('/Bands endpoint', () => {
    it("returns all bands", async () => {
        const response = await request(app).get("/bands")
        expect(response.body.length).toBe(3)
    })
   
    it("returns 200 status", async () => {
        const response = await request(app).get("/bands")
        expect(response.statusCode).toBe(200)
    })
    
    it("returns all bands", async () => {
        const response = await request(app).get("/bands")
        const responseData = JSON.parse(response.text)
        expect(responseData.length).toBe(3)
    })
    
})