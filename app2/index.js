const Koa = require("koa")
const app = new Koa()


app.use(async ctx => {
ctx.body = `App2 on ${require("os").hostname}`
});


console.log("App2 started on localhost:3000")

app.listen(3000);
