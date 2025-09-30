import LanguageItem from './LanguageItem.jsx'
import styles from './MyMain.module.css'
import languages from './languages.js'
import { useState } from 'react';


function LanguageList() {

    {/* Variabile di stato che salva l'id del linguaggio cliccato dall'utente */ }
    const [buttonClicked, setButtonClicked] = useState(null);

    return (
        <>
            <div className = { styles["container-button"] }>
                

                {languages.map( (language) => (
                    <LanguageItem
                        key = {language.id}
                        titolo = {language.title}
                        descrizione = {language.description}
                        isClicked = {buttonClicked === language.id}     // Setta isClicked a true quando l'id del linguaggio cliccato coincide con quello salvato nella variabile di stato (così solo un item risulta attivo)
                        settaID={() => setButtonClicked(language.id)}   // Funzione passata al figlio: quando clicca un linguaggio aggiorna la variabile di stato con il suo id
                    />
                ))}
            </div >
        </>
    )
}

export default LanguageList
