import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import { Button, Welcome } from '@storybook/react/demo';

import { add } from '@monorepo/common';

import Hello from './Hello'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Hello', module)
  .add('default', () => <Hello />)
  .add('with add from package common', () => <Hello content={`Add from Common Package add(2,5)=${add(2,5)}`} />);