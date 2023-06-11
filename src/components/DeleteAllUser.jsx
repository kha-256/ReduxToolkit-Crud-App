import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";


const DeleteAllUser = () => {

  const dispatch= useDispatch()
const clearUsers=()=>{
  dispatch(deleteUsers())
}
  return (
    <Wrapper>
            <button className="btn add-btn" onClick={clearUsers}>Clear Users</button>
          </Wrapper>
  );
};

const Wrapper = styled.section`
.add-btn{
 margin-top: 10px
}

`;

export default DeleteAllUser;
