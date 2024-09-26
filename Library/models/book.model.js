const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *  schemas:
 *      CreateBookDto:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  default: An amazing book
 *              author:
 *                  type: string
 *                  default: Jane Doe
 *          required:
 *              - title
 *              - author
 * 
 *      UpdateBookDto:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  default: An amazing book
 *              author:
 *                  type: string
 *                  default: Jane Doe
 * 
 *      BookDto:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *              title:
 *                  type: string
 *              author:
 *                  type: string
 *              createdAt:
 *                  type: string
 *                  format: date
 *              updatedAt:
 *                  type: string
 *                  format: date
 */

const bookModel = (db) => {
    return db.define("Book", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};

module.exports = {bookModel}