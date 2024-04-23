import { Middleware } from 'grammy';

import MyContext from './context';

type MyMiddleware = Middleware<MyContext>;

export default MyMiddleware;
