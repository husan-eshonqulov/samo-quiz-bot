import { Context } from 'grammy';
import { I18nFlavor } from '@grammyjs/i18n';

type MyContext = Context & I18nFlavor;

export default MyContext;
