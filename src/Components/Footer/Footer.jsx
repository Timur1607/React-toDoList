import './Footer.scss'

export default function Footer(props){
    return(
        <>
            <footer className={props.style}>
                <input type="button" value="Удалить завершенные" className="btn1" onClick={()=>{props.deleteMarked()}}/>
                <input type="button" value="Удалить все" className="deleteAll" onClick={()=>{props.deleteAll()}}/>
            </footer>
        </>
    )
}