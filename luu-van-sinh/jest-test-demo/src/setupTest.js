import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
// process.on('unhandledRejection', (reason) => {
// 	 console.log('REJECTION', reason)
// })