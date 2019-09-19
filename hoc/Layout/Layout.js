import React, { Component } from 'react';

import Aux from '../Auxs/Auxs';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import sideDrawer from '../../components/Navigation/Dashboard/Dashboard';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };
    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <sideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;