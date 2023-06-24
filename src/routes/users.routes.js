const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/users.service");

router.get("/", async (request, response, next) => {
  try {
    response.json(await getUsers());
  } catch (error) {
    next(error);
  }
});

router.get("/:userId", async (request, response, next) => {
  try {
    response.json(await getUserById(Number(request.params.userId)));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    response.json(await createUser(request.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:userId", async (request, response) => {
  try {
    response.json(
      await updateUser(Number(request.params.userId), request.body)
    );
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId", async (request, response) => {
  try {
    response.json(await deleteUser(Number(request.params.userId)));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
