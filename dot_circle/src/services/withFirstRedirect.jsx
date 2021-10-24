import React from "react";
import {Redirect} from "react-router-dom";

let isVisited = () => localStorage.getItem('visitedD&C');

export const withFirstRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!isVisited || isVisited === 'false') {
                debugger;
                localStorage.setItem('visitedD&C', 'true');
                return <Redirect to={'/welcome'}/>
            }
            return <Component {...this.props}/>;
        }
    }

    return RedirectComponent;
};
