import { combineReducers } from 'redux';

import asset from './asset';
import base from './base';
import user from './user';
import notices from './notices';

export default combineReducers({
	asset,
	base,
	user,
	notices
});
