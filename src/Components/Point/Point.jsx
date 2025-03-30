import './Point.scss'

export default function Point(props){

    
    
    return(
        <>
            <article className='point' id={props.id}>
                <div className="point__forLeft">
                    <input type="checkbox" className="point__checkbox" checked={props.el.mark} onChange={(el)=>{props.addMark(el, props.id)}}/>
                    <p className={props.el.mark ? 'point__text point__text_decoration ' : 'point__text'}>{props.el.value}</p>
                </div>
                <input type="text" defaultValue={props.el.value} className="point__forLeft_input"/>
                <div className='point__forRight'>
                    <p className='point__forRight_rewrite' onClick={(el)=> props.change(el.target.parentElement.parentElement)}>✏️</p>
                    <input type="button" value="❌" className="point__button" onClick={(el)=>{props.delete(el.target.parentElement.parentElement)}}/>
                </div>
            </article>
        </>
    )
}