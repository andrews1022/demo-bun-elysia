import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", ({ headers }) => {
  console.log("headers: ", headers);

  return "Hello, Elysia!";
});

app.listen(8080, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}!!`);
});
