/**
* TodoList.tsx
* Copyright: Microsoft 2017
*
* The Todo item edit view.
*/

import RX = require('reactxp');
import LoginStyles = require('./LoginStyles');

interface LoginPanelProps {
    onNavigateBack: () => void;
    onSubmitLogin: () => void;
    onCancelLogin: () => void;
}

interface LoginPanelState {
    username?: string;
    password?: string;
}

const _styles = {
    editTodoItem: RX.Styles.createTextStyle({
        margin: 8,
        height: 32,
        fontSize: LoginStyles.fontSizes.size20,
        alignSelf: 'stretch',
        backgroundColor: 'transparent'
    })
};

const _modalId  = 'ErrorDialog';

class LoginPanel extends RX.Component<LoginPanelProps, LoginPanelState> {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <RX.View style={ LoginStyles.styles.container }>                
                <RX.View style={ [LoginStyles.styles.header, RX.StatusBar.isOverlay() && LoginStyles.styles.headerWithStatusBar] }>
                    <RX.Button style={ LoginStyles.styles.cancelButton } onPress={ this._onPressBack }>
                        <RX.Text style={ LoginStyles.styles.buttonText }>
                            Cancel
                        </RX.Text>
                    </RX.Button>

                    <RX.Button
                        style={ LoginStyles.styles.submitButton }
                        onPress={ this._onPressSave }
                        disabled={ !this._onValidated }
                    >
                        <RX.Text style={ LoginStyles.styles.buttonText }>
                            Login
                        </RX.Text>
                    </RX.Button>
                </RX.View>

                <RX.Text>
                    Username
                </RX.Text>
                <RX.TextInput
                    style={ _styles.editTodoItem }
                    value={ this.state.username }
                    placeholder={ 'Enter username' }
                    placeholderTextColor={ LoginStyles.controlColors.placeholderText }
                    onChangeText={ this._onChangeUsername }
                    autoFocus={ true }
                    textAlign={ 'left' }
                />

                <RX.Text>
                    Password
                </RX.Text>
                <RX.TextInput
                    style={ _styles.editTodoItem }
                    value={ this.state.password }
                    placeholder={ 'Enter password' }
                    placeholderTextColor={ LoginStyles.controlColors.placeholderText }
                    onChangeText={ this._onChangePassword }
                    autoFocus={ true }
                    textAlign={ 'left' }
                    secureTextEntry={ true }
                />
            </RX.View>
        );
    }

    private _onValidated = () => {
        return true;
    }

    private _onPressBack = () => {
        this.setState({ username: '' });
        this.setState({ password: '' });
        this.props.onNavigateBack();
    }

    private _onChangeUsername = (newText: string) => {
        this.setState({ username: newText });
    }
    private _onChangePassword = (newText: string) => {
        this.setState({ password: newText });
    }

    private _onPressSave = () => {
        if (this.state.username && this.state.password) {   
            this._displayLoginMessage(); 
            this.setState({ username: '' });
            this.setState({ password: '' });
            //this.props.onNavigateBack();
        }
    }

    private _displayLoginMessage = () => {
        
        let dialog = (
            <RX.View>
                <RX.Text>
                    'Username:' { this.state.username }
                    'Password:' { this.state.password }
                </RX.Text>
                <RX.Button
                        onPress={ this._onOkButtonPress }>
                    <RX.Text>
                        'OK'
                    </RX.Text>
                </RX.Button>
            </RX.View>
        );

        RX.Modal.show(dialog, _modalId);
    }

    private _onOkButtonPress = (e: RX.Types.SyntheticEvent) => {
        RX.Modal.dismiss(_modalId);
    };

}

export = LoginPanel;
