import styles from './MyMain.module.css'

function LanguageItem(props) {

    const { titolo, descrizione, isClicked, settaID} = props;
        
    return (
        <>
            {/* Bottoni Linguaggi */ }
            <button onClick={settaID} > {titolo} </button>  {/* Quando il bottone viene cliccato, viene eseguita la funzione settaID passata dal padre */}
            {isClicked && mostraDescrizioneLinguaggio()}    {/* Se isClicked è true, chiama la funzione mostraDescrizioneLinguaggio*/}
        </>
    )

    /*************** 
        FUNZIONE  
    *****************/
    /* Restituisce Titolo + Descrizione del linguaggio corrente */
    function mostraDescrizioneLinguaggio() {
        return (

            <div className={styles["container-description"]} >
                <h2> {titolo}</h2>
                <p> {descrizione} </p>
            </div>
        )
    }
}

export default LanguageItem