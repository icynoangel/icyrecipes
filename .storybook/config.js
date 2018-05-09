import {configure, addDecorator} from '@storybook/react';

// import app styles
import './../src/client/css/index.scss';

// addon-options
import {setOptions} from '@storybook/addon-options';

// addon-info
import { setDefaults } from '@storybook/addon-info';
import PropTypesTable from './addon.info.proptype.table';
setDefaults({
  inline: true,
  TableComponent: PropTypesTable, // Override the component used to render the props table
});

function loadStories() {
  require('./stories');
  require('../stories/stories.css');
}

configure(loadStories, module);

setOptions({
  showAddonPanel: true,
  name: 'IcyRecipes',
  url: 'https://github.com/icynoangel/icyrecipes.git',
  sidebarAnimations: true
});