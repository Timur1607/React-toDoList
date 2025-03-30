import './Point.scss'

export default function Point(props){
    
    return(
        <>
            <article className='point' id={props.el.id}>
                <div className="point__forLeft">
                    <input type="checkbox" className="point__checkbox" checked={props.el.mark} onChange={(el)=>{props.addMark(el, props.el.id)}}/>
                    <p className={props.el.mark ? 'point__text point__text_decoration ' : 'point__text'}>{props.el.value}</p>
                </div>
                <input type="text" defaultValue={props.el.value} className="point__forLeft_input"/>
                <div className='point__forRight'>
                    <p className='point__forRight_rewrite' onClick={(el)=> props.change(el.target.closest('.point'), props.el.id)}>✏️</p>
                    <input type="button" value="❌" className="point__button" onClick={(el)=>{props.delete(el.target.parentElement.parentElement, props.el.id)}}/>
                </div>
            </article>
        </>
    )
}