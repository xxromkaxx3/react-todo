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

  const onChangeHandler = (newValue:ChangeEvent<HTMLInputElement>) => {
    const newText = newValue.target.value
    setValue(newText)
  }
  // const setThroughLine = () =>{
  //   list.map(item=>{ 
  //     const element = document.getElementById(item.id)
  //     if (element) element.style.textDecoration='none'
  //   })
  //   completedList.map(item=>{
  //     const element = document.getElementById(item)
  //     if (element) element.style.textDecoration='line-through'
  //   }
  //   )
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
    const targetTodoIndex = list.findIndex(todo => todo.id === id)
    const targetTodo = list[targetTodoIndex]
    const targetTodoWithNewState = {...targetTodo, completed: !targetTodo.completed}
    const newArr = list.slice()
    newArr[targetTodoIndex] = targetTodoWithNewState
    setList(newArr)
  }
  const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
    if (e.code === 'Enter') {
      onClickHandler() 
      // setThroughLine()
    }
  }

  const onRemoveHandler = (id:string) =>{
    const copyList = list.slice()
    const newList = copyList.filter(item=>item.id!==id)
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
