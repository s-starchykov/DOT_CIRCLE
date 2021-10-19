import {Dropdown} from "react-bulma-components";
import useTranslations from "../../services/i18n/useTranslations";
import styles from "./LangSwitcher.module.css";

export function LangSwitcher() {
    const {lang, supportedLangs, setLang} = useTranslations();

    return (
        <Dropdown right
                  color="dark"
                  className={styles.dropdown}
                  onChange={(newLang) => setLang(newLang)}>

            {Object.entries(supportedLangs).map(([code, name]) => (<Dropdown.Item value={code} key={code} renderAs="a">{name}</Dropdown.Item>))}
        </Dropdown>
    );
}
