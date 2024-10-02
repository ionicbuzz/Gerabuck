const { Router } = require("express");
const { createBookHandler, getManyBooksHandler, updateBookHandler, deleteBookHandler, bookLendingHandler } = require("../controllers/book.controller");
const {isAuthenticated, isStaff, hasPermission} = require("../middleware/access-control.middleware");

const router = Router();

/**
 * @openapi
 * /api/books:
 *  get:
 *      tags:
 *          - Books
 *      summary: Get all books
 *      responses:
 *          200:
 *              description: Successful query. All books returned in an array.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/BookDto"
 *          500:
 *              description: Internal server error (aka not your fault, its ours)
 *  post:
 *      tags:
 *          - Books
 *      summary: Creates a new book.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/CreateBookDto"
 *      responses:
 *          201:
 *              description: New book created!!!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/BookDto"
 * 
 * /api/books/{id}:
 *  patch:
 *      tags:
 *          - Books
 *      summary: Updates a book by id.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/UpdateBookDto"
 *      responses:
 *          202:
 *              description: Book has been updated successfully!!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/BookDto"
 * 
 *  delete:
 *      tags:
 *          - Books
 *      summary: Deletes a book by id.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          202:
 *              description: Book has been updated successfully!!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/BookDto"
 */

router.use(isAuthenticated);
router.use(isStaff);

router.route("/")
    .post(hasPermission('canManageBooks'), createBookHandler)
    .get(hasPermission("canLendBooks"), getManyBooksHandler);

router.route("/:id")
    .patch(hasPermission('canManageBooks'), updateBookHandler)
    .delete(hasPermission('canManageBooks'), deleteBookHandler);

router.route("/:id/lend").patch(hasPermission("canLendBooks"), bookLendingHandler);

module.exports = router;