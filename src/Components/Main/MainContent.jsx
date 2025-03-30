import { useEffect } from 'react'
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
                id: Date.now(),
            })
            localStorage.setItem("toDoList", JSON.stringify(Data))
            props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        }
        props.setValue('')
    }, [props.check])
    
    function deletingPoint(el, point){
        if(el.children[1].getAttribute('class').split(' ').length === 2){
            el.children[1].classList.toggle('point__forLeft_input-script')
            el.children[0].children[1].classList.toggle('point__text-script')
            el.children[2].children[0].textContent = '✏️'
        }
        
        let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]')
        let newData = storedData.filter(el => el.id !== point)
        localStorage.setItem("toDoList", JSON.stringify(newData))
        props.setData(newData)
        
        if(newData.length === 0){
            props.setMainStyle('main')
            props.setFooterStyle('footer')
        }
    }
    
    function addMark(event, id) {
        let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]');
        storedData.map((el)=>{
            el.id === id ? el.mark = true : ''
        })
        
        localStorage.setItem('toDoList', JSON.stringify(storedData));
        props.setData([...storedData]);
    }

    function change(el, id){
        let input = el.children[1]
        let marker = el.children[2].children[0]
        let value = el.children[0].children[1]

        input.classList.toggle('point__forLeft_input-script')
        value.classList.toggle('point__text-script')

        if(input.getAttribute('class').split(' ').length === 2){
            marker.textContent = '✅'
        } else if(input.getAttribute('class').split(' ').length === 1){
            marker.textContent = '✏️'

            let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]')
            storedData.map((el)=>{
                el.id === id ? el.value = input.value : ''
            })
            localStorage.setItem('toDoList', JSON.stringify(storedData));
            props.setData(JSON.parse(localStorage.getItem('toDoList') || '[]'))
        }
    }

    useEffect(()=>{
        // props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        props.setData(JSON.parse(localStorage.getItem('toDoList') || '[]'))
    }, [props.deleteMarkedStatus])

    return(
        <>
            <main className={props.style}>
                {props.data.map((el, i) => (
                    <Point key={i} el={el} delete={deletingPoint} addMark={addMark} change={change}/>
                ))}
            </main>
        </>
    )
}