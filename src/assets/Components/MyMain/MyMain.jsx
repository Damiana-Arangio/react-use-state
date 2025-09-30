import languages from  "./languages.js"
import styles from './MyMain.module.css'
import LanguageList from "./LanguageList.jsx"

function MyMain() {
    return(
        <main className={styles["container-main"]}>
            <LanguageList/>
        </main>
    )
}

export default MyMain