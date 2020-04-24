import NestedComponent from '../_classes/nested/NestedComponent';

export default class CollapsePanelComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      label: 'Collapse Panel',
      type: 'panel',
      key: 'collapsePanel',
      title: 'Collapse Panel',
      theme: 'default',
      breadcrumb: 'default',
      components: [],
      clearOnHide: false,
      input: false,
      tableView: false,
      persistent: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Panel',
      icon: 'list-alt',
      group: 'layout',
      documentation: 'http://help.form.io/userguide/#collapsePanel',
      weight: 30,
      schema: CollapsePanelComponent.schema()
    };
  }

  get defaultSchema() {
    return CollapsePanelComponent.schema();
  }

  checkValidity(data, dirty, row) {
    if (!this.checkCondition(row, data)) {
      this.setCustomValidity('');
      return true;
    }

    return this.getComponents().reduce(
      (check, comp) => {
        //change collapsed value only in case when the panel is collapsed to avoid additional redrawing that prevents validation messages
        if (!comp.checkValidity(data, dirty, row) && this.collapsed) {
          this.collapsed = false;
        }
        return comp.checkValidity(data, dirty, row) && check;
      },
      super.checkValidity(data, dirty, row)
    );
  }

  get templateName() {
    return 'collapsePanel';
  }

  constructor(...args) {
    super(...args);
    this.noField = true;
  }
}
