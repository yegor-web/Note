import { Divider, List } from 'antd';
import React, { useState, useRef, useContext } from 'react';
import MyInput from '../UI/MyInput/MyInpt';
import Delete from '../Delete';
import './ListItem.sass'
import { SideContext } from '../../Contex';


const data = [
  'I love natural tits'
];


const ListItem: React.FC = () => {

  const { noteDescription, setNoteDescription } = useContext(SideContext)
  const addNewList = (e) => {
    e.preventDefault()
    setNoteDescription(e.currentTarget.value)
    console.log(noteDescription)
  }
  const onChange = (e) => {
    setNoteDescription(e.target.value)
    console.log(noteDescription)
  }

  return (
    <div className='list'>
      <MyInput orientation="left" style={{ color: 'white' }}></MyInput>
      <textarea className='list__text' value={noteDescription} onChange={onChange} />
      <div className='list__action'>
        <button onClick={addNewList}>Добавить заметку</button>
        <Delete>Удалить заметку</Delete>
      </div>
    </div>
  );
}



export default ListItem;