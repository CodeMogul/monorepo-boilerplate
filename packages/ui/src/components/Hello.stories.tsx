import * as React from 'react';
import Hello from './Hello';
import { add } from '@monorepo/common';

import { storiesOf } from '@storybook/react';

storiesOf('Hello', module)
  .add('Hello There', () => <Hello />)
  .add('Hello Using Common Package', () => <Hello content={`Hello from add(2,5) = ${add(2,5)}`}/>)
