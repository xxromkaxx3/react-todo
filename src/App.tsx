import {Input, Button, List} from './components'
import {useEffect } from 'react'
import {StyledListWrapper, StyledWrapper} from './styles/StyledListWrapper'
import { useDispatch } from 'react-redux'
import { getStorageListAction } from './redux/actions'




export type Todo = {
  value: string
  completed: boolean
  id:string
}


function App() {

  const dispatch = useDispatch()
  useEffect(()=>{dispatch(getStorageListAction())}, [dispatch])

  return (
    <StyledWrapper>
      <StyledListWrapper>
        <List/>
        <Input/>
        <Button/>
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default App;
