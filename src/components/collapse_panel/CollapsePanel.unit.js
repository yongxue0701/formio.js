import assert from 'power-assert';

import Harness from '../../../test/harness';
import { flattenComponents } from '../../utils/formUtils';

import {
  comp1
} from './fixtures';

import CollapsePanelComponent from './CollapsePanel';
import CollapsePanelForm from './CollapsePanel.form';

describe('Collapse Panel Component', () => {
  it('Should build a collapse panel component', () => {
    return Harness.testCreate(CollapsePanelComponent, comp1).then((component) => {
      Harness.testElements(component, 'input[type="text"]', 2);
    });
  });

  describe('Edit Form', () => {
    it('should include components for important settings', () => {
      const components = flattenComponents(CollapsePanelForm().components);
      const keys = Object.keys(components).map(path => components[path].key);
      const settings = [
        'breadcrumb',
        'breadcrumbClickable'
      ];

      assert(settings.every(s => keys.includes(s)));
    });
  });
});
