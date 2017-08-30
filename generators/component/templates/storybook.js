import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
// import {action} from '@storybook/addon-actions';

import <%= name %> from 'sentry-ui/<%= parentPath %><%= fileName %>';

storiesOf('<%= name %>', module).add('default', withInfo('Description')(() => (
  <<%= name %> />
)));
