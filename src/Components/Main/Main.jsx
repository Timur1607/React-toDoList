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
            })
            localStorage.setItem("toDoList", JSON.stringify(Data))
            props.setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        }
        props.setValue('')
    }, [props.check])
    
    function deletingPoint(point){
        let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]')
        let newData = storedData.filter((_, index) => index != point)
        localStorage.setItem("toDoList", JSON.stringify(newData))
        props.setData(newData)
        
        if(newData.length === 0){
            props.setMainStyle('main')
            props.setFooterStyle('footer')
        }
    }
    
    function addMark(event, id) {
        let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]');
        storedData[id].mark = event.target.checked;
        
        localStorage.setItem('toDoList', JSON.stringify(storedData));
        props.setData([...storedData]);
    }

    function change(el){
        console.log(el);
        el.children[1].classList.toggle('point__forLeft_input-script')
        el.children[0].children[1].classList.toggle('point__text-script')
        console.log(el.children[1].getAttribute('class').split(' ').length);
        if(el.children[1].getAttribute('class').split(' ').length === 2){
            el.children[2].children[0].textContent = '✅'
        } else if(el.children[1].getAttribute('class').split(' ').length === 1){
            el.children[2].children[0].textContent = '✏️'

            let storedData = JSON.parse(localStorage.getItem('toDoList') || '[]')
            storedData[el.getAttribute('id')].value = el.children[1].value
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
                    <Point key={i} el={el} delete={()=>deletingPoint(i)} id={i} addMark={addMark} change={change}/>
                ))}
            </main>
        </>
    )
}