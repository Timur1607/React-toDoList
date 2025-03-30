import './Header.scss'

export default function Header(props){

    function sendForm(el, event){
        event.preventDefault()
        if(el.target.children[0].value.replace(/\s+/g, '') !== ''){
            props.setValue(el.target.children[0].value)
            props.setCheck(!props.check)
        }
        el.target.children[0].value = ''
    }

    return(
        <>
            <header>
                <form onSubmit={(el)=>{sendForm(el, event)}}>
                    <input type="text" placeholder="Сделать удаление завершенных и всех" className="input"/>
                    <input type="submit" className="submit" value="Добавить"/>
                </form>
            </header>
        </>
    )
}