/**
* TodoStyles.tsx
* Copyright: Microsoft 2017
*
* Shared styles used in the Todo application.
*/

import RX = require('reactxp');

class LoginStyles {
    static color = {
        black: '#000000',
        black50: '#0000007F'
   };

    static controlColors = {
        defaultActionButtonColor: LoginStyles.color.black,
        saveActionButtonCollor: '#666',
        destroyActionButtonCollor: '#FF8C00',
        contentBackground: '#eee',
        headerBackground: '#cdd',
        placeholderText: '#ccc'
    };

    static buttonBorders = {
        radius: 6,
        margins: 16,
        margin: 8
    }

    static fontSizes = {
        size14: 14,
        size20: 20,
        size36: 36
    }

    static styles = {
        headerWithStatusBar: RX.Styles.createViewStyle({
            paddingTop: 22
        }),
        header: RX.Styles.createViewStyle({
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: LoginStyles.controlColors.headerBackground
        }),
        container: RX.Styles.createViewStyle({
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: LoginStyles.controlColors.contentBackground
        }),
        cancelButton: RX.Styles.createViewStyle({
            margin: LoginStyles.buttonBorders.margin,
            borderRadius: LoginStyles.buttonBorders.radius,
            backgroundColor: LoginStyles.controlColors.defaultActionButtonColor
        }),
        submitButton: RX.Styles.createViewStyle({
            margin: LoginStyles.buttonBorders.margin,
            borderRadius: LoginStyles.buttonBorders.radius,
            backgroundColor: LoginStyles.controlColors.saveActionButtonCollor
        }),
        buttonText: RX.Styles.createTextStyle({
            fontSize: LoginStyles.fontSizes.size14,
            marginVertical: 6,
            marginHorizontal: 12,
            color: 'white'
        })
    };
}

export = LoginStyles;
