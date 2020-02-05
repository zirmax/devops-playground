const Koa = require("koa")
const app = new Koa()


app.use(async ctx => {
ctx.body = `App1 on ${require("os").hostname}`
});


console.log("App1 started on localhost:3000")

app.listen(3000);
