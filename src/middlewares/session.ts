import { session } from 'grammy';

import SessionData from '../types/session';

const mySession = session({
  initial: (): SessionData => ({ __language_code: 'en' })
});

export default mySession;
