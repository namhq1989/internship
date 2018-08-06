import dva from 'dva'
// import { LoginModel } from './screens/login'
// import { RegisterModel } from './screens/register'
// import { HomeModel } from './screens/home'
import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({})

// 3. Model
// app.model(LoginModel)
// app.model(RegisterModel)
// app.model(HomeModel)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
