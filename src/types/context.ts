import { Context, SessionFlavor } from 'grammy';
import { I18nFlavor } from '@grammyjs/i18n';

import SessionData from './session';

type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;

export default MyContext;
