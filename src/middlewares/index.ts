import MyMiddleware from '../types/middleware';
import i18n from './i18n';
import mySession from './session';

const middlewares: MyMiddleware[] = [mySession, i18n];

export default middlewares;
