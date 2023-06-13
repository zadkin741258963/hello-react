import { FormEvent } from 'react';
import { useContext } from './routes/root';

export default function Hello() {

  const { 'hello-state' :  { name: [ name, setName ] } } = useContext();

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name}></input></p>
      <p>{name}</p>
    </div>
  );

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }
}