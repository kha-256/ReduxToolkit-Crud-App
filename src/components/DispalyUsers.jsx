import { useSelector } from "react-redux";
import styled from "styled-components";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUsers = () => {

  const dispatch= useDispatch();
    const data= useSelector((state)=>{
        return state.users
    })

    const deleteUser=(payload)=>{
      dispatch(removeUser(payload))
    }
  return (
    <Wrapper>
     {data.map((user,id)=>{
        return <li>
            {user}
            <button className="btn-delete" onClick={()=> deleteUser(id)}>
            <DeleteForeverIcon sx={{color:'red', fontSize:20, cursor:"pointer"}} />
            </button>
            
        </li>
     })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
 li{
  width:100%;
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;

  &:first-child{
      border-top: 1px solid #eee
  }
  &:last-child{
      border-bottom: none
  }
},

.btn-delete{
    background-color: transparent;
    border: none;
   
}

`;

export default DisplayUsers;