import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

const buttonStyles = { root: { marginRight: 8 } };

class PanelFooterExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      showPanel: false,
    };
  }


  // This panel doesn't actually save anything; the buttons are just an example of what
  // someone might want to render in a panel footer.
  onRenderFooterContent() {
    return (
      <div>
        <PrimaryButton onClick={() => this.handleSave()} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={() => this.dismissPanel()}>Cancel</DefaultButton>
      </div>
    );
  }

  openPanel() {
    this.setState({ showPanel: true });
  }

  dismissPanel() {
    this.setState({ showPanel: false });
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleSave() {
    const { addNewGroup } = this.props;
    const { name } = this.state;
    addNewGroup(name);
    this.dismissPanel();
  }

  render() {
    const { showPanel } = this.state;
    return (
      <div style={{ position: 'fixed', bottom: '0px' }}>
        <DefaultButton text="Add Group" onClick={() => this.openPanel()} style={{ width: '220px', margin: '15px' }} />
        <Panel
          isOpen={showPanel}
          onDismiss={() => this.dismissPanel()}
          headerText="Add new Group"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={() => this.onRenderFooterContent()}
          // Stretch panel content to fill the available height so the footer is positioned
          // at the bottom of the page
          isFooterAtBottom
        >
          <span>fill the textfield and click save button.</span>
          <TextField
            onChange={(e, v) => this.handleNameChange(v)}
            label="Group Name "
            placeholder="Please enter text"
            required
            // style={{ top: '100px' }}
          />
        </Panel>
      </div>
    );
  }
}

export default PanelFooterExample;
