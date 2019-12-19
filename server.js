const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = new next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = new Koa()
	const router = new Router()
	router.get('/a/:id', async (ctx) => {
		const id = ctx.params.id
		await handle(ctx.req, ctx.res, {
			pathname: '/a',
			query: {
				id
			}
		})
		ctx.respond = false
	})
	server.use(router.routes())

// router.get('/test/:id',(ctx)=>{
// 	const id = ctx.params.id
// 	// ctx.body=`<p>test-${id}</p>`
// 	ctx.body={success:true}
// 	ctx.set('Content-Type','application/json')
// })
	server.use(async (ctx, next) => {
		/**
		 * 这里的ctx.req和ctx.res其实是node原生的request对象和response对象
		 */
		await handle(ctx.req, ctx.res)
		ctx.respond = false
		// await next()
	})

	


// server.use(async (ctx, next)=>{
// 	ctx.body='<span>koa is render2</span>'
// 	// await ctx.body='<span>koa is render</span>'
// 	await next()
// })
	server.listen(3000, () => {
		console.log('koa server listening on 3000')
	})
})