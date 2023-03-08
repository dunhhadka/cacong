import React from 'react'
import "./Content.css"
import Item from './Item'
import Item2 from './Item2'
import ButtonRegister from '../form/ButtonRegister'
export default function Content() {
  return (
    <div className='content_box'>
          <h3 className='first_header'>
               GIÚP BẠN GIẢI QUYẾT CÁC VẤN ĐỀ VỀ SINH CON
          </h3>
          <div className='box_content'>
               <h3 className='title_content'>
                    BẠN GẶP VẤN ĐẾ TRONG SINH CON <span>Mà không biết giải quyết như thế nào ?</span>
               </h3>
               <div className='manybox'>
                    <Item/>
                    <Item/>
                    <Item/>
               </div>
               <ButtonRegister myProp={"ĐĂNG KÍ NGAY"}/>
          </div>
    </div>
  )
}
