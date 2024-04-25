const mongoose = require("mongoose");
const createServer = require("./server");
const Task = require("./models/Task");
const supertest = require("supertest");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI_TESTING = process.env.MONGO_URI_TESTING;

beforeEach((done) => {
  mongoose.connect(MONGO_URI_TESTING, { useNewUrlParser: true }, () => done());
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

// CREATE TASK ... router.post("/", createTask);
test("POST /", async () => {
  const data = {
    author: "616481871af94a02887688a5",
    title: "Lorem ipsum",
  };

  await supertest(app)
    .post("/tasks/")
    .send(data)
    .expect(201)
    .then(async (response) => {
      // Check the response
      expect(response.body._id).toBeTruthy();
      expect(response.body.title).toBe(data.title);
      expect(response.body.author).toBe(data.author);
      // Check the data in the database
      const task = await Task.findOne({ _id: response.body._id });
      expect(task).toBeTruthy();
      expect(task.title).toBe(data.title);
      expect(task.author.toString()).toBe(data.author);
    });
});

// READ TASKS BY AUTHOR _id ... router.get("/users/:id", getTasks);
test("GET /users/:id", async () => {
  const task = await Task.create({
    author: "616481871af94a02887688a5",
    title: "Lorem ipsum",
  });

  await supertest(app)
    .get("/tasks/users/616481871af94a02887688a5")
    .expect(200)
    .then((response) => {
      // Check the response type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check the response data
      expect(response.body[0].author).toBe(task.author.toString());
      expect(response.body[0]._id).toBe(task.id);
      expect(response.body[0].title).toBe(task.title);
    });
});

// READ SINGLE TASK BY TASK _id ... router.get("/:id", getTask)
test("GET /tasks/:id", async () => {
  const task = await Task.create({
    author: "616481871af94a02887688a5",
    title: "Lorem ipsum",
  });

  await supertest(app)
    .get(`/tasks/${task.id}`)
    .expect(200)
    .then((response) => {
      expect(response.body._id).toBe(task.id);
      expect(response.body.title).toBe(task.title);
      expect(response.body.author).toBe(task.author.toString());
    });
});

// UPDATE TASK ... router.put("/:id", updateTask);
test("PUT /tasks/:id", async () => {
  const task = await Task.create({
    author: "616481871af94a02887688a5",
    title: "Lorem ipsum",
  });

  const data = {
    title: "New title",
  };

  await supertest(app)
    .put("/tasks/" + task.id)
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body._id).toBe(task.id);
      expect(response.body.title).toBe(data.title);
      // Check the data in the database
      const newTask = await Task.findOne({ _id: response.body._id });
      expect(newTask).toBeTruthy();
      expect(newTask.title).toBe(data.title);
    });
});

// DELETE TASK router.delete("/:id", deleteTask);
test("DELETE /tasks/:id", async () => {
  const task = await Task.create({
    author: "616481871af94a02887688a5",
    title: "Lorem ipsum",
  });

  await supertest(app)
    .delete("/tasks/" + task.id)
    .expect(204)
    .then(async () => {
      expect(await Task.findOne({ _id: task.id })).toBeFalsy();
    });
});

const app = createServer();
