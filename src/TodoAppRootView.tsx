/*
* Top-level UI for sample to-do app.
*/

import RX = require('reactxp');

import EditTodoPanel = require('./EditTodoPanel');
import TodoListPanel = require('./TodoListPanel');
import LoginPanel = require('./LoginPanel');

import TotoStyles = require('./TodoStyles');

enum NavigationRouteId {
    TodoListPanel,
    EditTodoPanel,
    LoginPanel
}

const styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: TotoStyles.controlColors.contentBackground
    })
};

class TodoAppRootView extends RX.Component<null, null> {
    private _navigator: RX.Navigator;

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.TodoListPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
        }]);
    }

    render() {
        return (
            <RX.Navigator
                ref={ this._onNavigatorRef }
                renderScene={ this._renderScene }
                cardStyle={ styles.navCardStyle }
            />
        );
    }

    private _onNavigatorRef = (navigator: RX.Navigator) => {
        this._navigator = navigator;
    }

    private _renderScene = (navigatorRoute: RX.Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.TodoListPanel:
                return (
                    <TodoListPanel
                        onNavigateBack={ this._onPressBack }
                        onShowTodoPanel={ this._onShowTodoPanel }
                        onShowLoginPanel={ this._onShowLoginPanel }
                    />
                );

            case NavigationRouteId.EditTodoPanel:
                return (
                    <EditTodoPanel 
                        onNavigateBack={ this._onPressBack }
                        onCancelTodo={ this._onPressBack }
                        onDeleteTodo={ this._onPressBack }
                        onSaveTodo={ this._onPressBack }
                    />
                );

            case NavigationRouteId.LoginPanel:
                return(
                    <LoginPanel 
                        onNavigateBack={ this._onPressBack }
                        onSubmitLogin={ this._onPressBack }
                        onCancelLogin={ this._onPressBack }
                    />                    
                );
        }

        return null;
    }

    private _onShowTodoPanel = () => {
        this._navigator.push({
            routeId: NavigationRouteId.EditTodoPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onShowLoginPanel = () => {
        this._navigator.push({
            routeId: NavigationRouteId.LoginPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressBack = () => {
        this._navigator.pop();
    }

    
}

export = TodoAppRootView;
