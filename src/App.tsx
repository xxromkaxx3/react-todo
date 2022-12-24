import {Input, Button, List} from './components'
import {ChangeEvent, useState, KeyboardEvent} from 'react'
import {nanoid} from 'nanoid'
import {StyledListWrapper, StyledWrapper} from './styles/StyledListWrapper'

export type Todo = {
  value: string
  completed: boolean
  id:string
}


function App() {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<Todo[]>([])
  const [completedList, setCompletedList] = useState<string[]>([])

  const onChangeHandler = (newValue:ChangeEvent<HTMLInputElement>) => {
    const newText = newValue.target.value
    setValue(newText)
  }
  // const setThroughLine = () =>{
  //   list.map(item=>{ 
  //     const element = document.getElementById(item.id)
  //     if (element) element.style.textDecoration='none'
  //   })
  //   setTimeout(()=>{
  //   completedList.map(item=>{
  //     const element = document.getElementById(item)
  //     if (element) element.style.textDecoration='line-through'
  //   })},0)
  // }

  const onClickHandler = () => {
    
      if (!value) return
      const id = nanoid()
      const newTodo = {
        value: value,
        completed: false,
        id:id
      }
      setList([...list, newTodo])
      setValue('')
      
      const element:HTMLElement|null= document.getElementById("elementInput")
      element?.focus()
  }
  const onGrabHandler = (id:string)=>{
    // const element:HTMLElement|null= document.getElementById(id)
    // if (!completed){
    //   if (element) element.style.textDecoration='line-through'
    //   setCompletedList([...completedList, id])
    // } else if(completed){
    //   if (element) element.style.textDecoration='none'
    //   const copyCompletedList = completedList.slice()
    //   const newCompletedList = copyCompletedList.filter(item => item!== id)
    //   setCompletedList(newCompletedList)
    // }
    const targetIndex = list.findIndex(item => item.id === id)
    const target = list[targetIndex]
    const newStateTarget = {...target, completed: !target.completed }
    const newList = list.slice()
    newList[targetIndex] = newStateTarget
    setList(newList)
    
    // copyList.forEach(item=>{if (item.id===id) item.completed=!completed})
    // setList(copyList)
  }
  const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
    if (e.code === 'Enter') {
      onClickHandler() 
      console.log(completedList)
      // setThroughLine()
    }
  }

  const onRemoveHandler = (id:string) =>{
    const copyList = list.slice()
    const newList = copyList.filter(item=>item.id!==id)
    const copyCompletedList = completedList.slice()
    const newCompletedList = copyCompletedList.filter(item=>item!==id)
    setCompletedList(newCompletedList)
    setList(newList)
    // setThroughLine()
  }


  return (
    <StyledWrapper>
      <StyledListWrapper>
        <List item={list}  liClick={onGrabHandler} butClick={onRemoveHandler} />
        <Input id='elementInput' value={value} onKeyDown={onKeyDownHandler} onChange={onChangeHandler}/>
        <Button text='Save' onClick={onClickHandler} />
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default App;
