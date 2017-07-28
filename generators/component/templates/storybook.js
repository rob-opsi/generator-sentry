import React from 'react';
import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import <%= name %> from 'sentry-ui/<%= fileName %>';

storiesOf('<%= name %>').addWithInfo('default', '', () => (
  <<%= name %> />
));
