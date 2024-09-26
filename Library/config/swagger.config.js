const { name, version } = require("../package.json");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerConfig = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: name,
            version
        }
    },
    apis: ["./routers/*.js", "./models/*.js"]
}

const swaggerSpecification = swaggerJsdoc(swaggerConfig);

module.exports = { swaggerSpecification };