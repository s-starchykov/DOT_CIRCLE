import {withNamespaces} from "react-i18next";

const WelcomePage = ({t}) => {
    return (
        <div>
            Welcome to Dot&Circle
        </div>
    )
}

export default  withNamespaces()(WelcomePage);