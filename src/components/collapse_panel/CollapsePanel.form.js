import nestedComponentForm from '../_classes/nested/NestedComponent.form';

import CollapsePanelEditDisplay from './editForm/CollapsePanel.edit.display';
import CollapsePanelEditConditional from './editForm/CollapsePanel.edit.conditional';

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: CollapsePanelEditDisplay
    },
    {
      key: 'conditional',
      components: CollapsePanelEditConditional,
    }
  ], ...extend);
}
