import { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hr from '../Hr/Hr'
import Main from '../Main/MainContent'
import './List.scss'


export default function List(){
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(true)
    const [data, setData] = useState(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
    const [mainStyle, setMainStyle] = useState('main')
    const [footerStyle, setFooterStyle] = useState('footer')

    useEffect(()=>{
        if((localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : []).length !== 0){
            setMainStyle('main main__script')
            setFooterStyle('footer footer__script')
        }
    }, [])

    function deleteAll(){
        let Data = []
        localStorage.setItem("toDoList", JSON.stringify(Data))
        setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
        setMainStyle('main')
        setFooterStyle('footer')
    }

    function deleteMarked(){
        let Data = localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : []
        let newData = Data.filter(el => el.mark === false)
        if(newData.length === 0){
            setMainStyle('main')
            setFooterStyle('footer')
        }
        localStorage.setItem("toDoList", JSON.stringify(newData))
        setData(localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.toDoList) : [])
    }

    return(
        <>
            <section className='List'>
                <Header value={value} setValue={setValue} setCheck={setCheck} check={check}/>
                <Hr/>
                <Main data={data} setData={setData} style={mainStyle} setMainStyle={setMainStyle} setFooterStyle={setFooterStyle} check={check} value={value} setValue={setValue}/>
                <Footer style={footerStyle} deleteAll={deleteAll} deleteMarked={deleteMarked}/>
            </section>
        </>
    )
}