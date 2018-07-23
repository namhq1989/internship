import dva from 'dva'
// import ActivityModel from './screens/activities/model'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({})

// 3. Model
// app.model(ActivityModel)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
