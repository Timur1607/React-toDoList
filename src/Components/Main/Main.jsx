import { useState, useEffect } from 'react'
import './Main.scss'
import Point from '../Point/Point'

export default function Main(props){

    useEffect(()=>{
        let Data = (localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        
        if(props.value !== ''){
            if(Data.length === 0){
                props.setMainStyle('main main__script')
                props.setFooterStyle('footer footer__script')
            }
            Data.push({
                value: props.value,
                delete: 0,
                mark: false,
            })
            localStorage.setItem("toDoList", JSON.stringify(Data))
            props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        }
        props.setValue('')
    }, [props.check])
    
    function deletingPoint(point){
        let Data = (localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        let newData = []
        for(let i = 0; i < Data.length; i++){
            if(i != point.getAttribute('id')){
                newData.push(Data[i])
            }
        }
        localStorage.setItem("toDoList", JSON.stringify(newData))
        props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        if(newData.length === 0){
            props.setMainStyle('main')
            props.setFooterStyle('footer')
        }
    }
    function addMark(el){
        let Data = (localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        for(let i = 0; i < Data.length; i++){
            if(i == el.target.parentElement.parentElement.getAttribute('id')){
                Data[i].mark = el.target.checked
            }
        }
        localStorage.setItem("toDoList", JSON.stringify(Data))
        props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        console.log(Data);
    }
    useEffect(()=>{
        props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
    }, [props.deleteMarkedStatus])

    return(
        <>
            <main className={props.style}>
                {props.data.map((el, i) => (
                    <Point key={i} el={el} delete={deletingPoint} id={i} addMark={addMark}/>
                ))}
            </main>
        </>
    )
}