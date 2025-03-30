import { useState, useEffect } from 'react'
import './Point.scss'

export default function Point(props){
    
    return(
        <>
            <article className='point' id={props.id}>
                <div className="point__forLeft">
                    <input type="checkbox" className="point__checkbox" defaultChecked={props.el.mark ? true : false} onClick={(el)=>{props.addMark(el)}}/>
                    <p className={props.el.mark ? 'point__text point__text_decoration ' : 'point__text'}>{props.el.value}</p>
                </div>
                <input type="button" value="❌" className="point__button" onClick={(el)=>{props.delete(el.target.parentElement)}}/>
            </article>
        </>
    )
}