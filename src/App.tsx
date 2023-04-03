import {Input, Button, List} from './components'
import {useEffect } from 'react'
import {StyledListWrapper, StyledWrapper} from './styles/StyledListWrapper'
import { useDispatch } from 'react-redux'
import { slice } from './redux/reduser'




export type Todo = {
  value: string
  completed: boolean
  id:string
}


function App() {
  const {getStorage} = slice.actions
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(getStorage())}, [dispatch, getStorage])

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
