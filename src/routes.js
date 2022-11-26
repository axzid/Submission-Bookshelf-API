const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  getFinishedBooksHandler,
  getReadingBooksHandler,
} = require("./handler");

const routers = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      // return json
      return {
        message: "Home",
        status: "success",
        statusCode: 200,
      };
    },
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GEt",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
  {
    method: "GET",
    path: "/books/finished",
    handler: getFinishedBooksHandler,
  },
  {
    method: "GET",
    path: "/books/reading",
    handler: getReadingBooksHandler,
  },
];

module.exports = routers;
