import { Input } from 'antd';
import React from 'react';
import './Myinput.sass'
import { useContext } from 'react';
import { NoteContext } from '../../../Contex';

const MyInput: React.FC = () => {
  const onChange = (e) => {
    setNoteText(e.target.value);
  };

  const {noteText, setNoteText} = useContext(NoteContext)
  return (
    <>
    <Input showCount className='inpt' onChange={onChange} value={noteText} />
    </>
  );
}
export default MyInput;