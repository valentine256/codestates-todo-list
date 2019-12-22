import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';


const iconClass = mergeStyles({
  fontSize: 18,
  height: 18,
  width: 18,
  color: '#ADADAD',
  selectors: {
    '&:hover': { color: '#FFFFFF' },
  },
  position: 'absolute',
  right: 25,
  top: 3,
});

const buttonStyles = { root: { marginRight: 8 } };

class RenameGroup extends React.Component {
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
          Rename
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
    const { renameGroup } = this.props;
    const { name } = this.state;
    renameGroup(name);
    this.dismissPanel();
  }

  render() {
    const { showPanel } = this.state;
    const { groupName } = this.props;
    return (
      <div>
        <FontIcon iconName="Repair" className={iconClass} onClick={() => this.openPanel()} />
        <Panel
          isOpen={showPanel}
          onDismiss={() => this.dismissPanel()}
          headerText={`Rename the Group: ${groupName}`}
          closeButtonAriaLabel="Close"
          onRenderFooterContent={() => this.onRenderFooterContent()}
          // Stretch panel content to fill the available height so the footer is positioned
          // at the bottom of the page
          isFooterAtBottom
        >
          <span>fill the textfield and click save button.</span>
          <TextField
            onChange={(e, v) => this.handleNameChange(v)}
            label="New Group Name "
            placeholder="Please enter text"
            required
            // style={{ top: '100px' }}
          />
        </Panel>
      </div>
    );
  }
}

export default RenameGroup;
