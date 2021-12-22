import { ADD_STUDENT, DELETE_STUDENT } from '../actions/actionType'
const inittial=[
    {
        id:1,
        name:"hihi",
        email:"hihi@gmail.com",
        age:21
    },
    {
        id:2,
        name:"haha",
        email:"haha@gmail.com",
        age:21
    }
]

const StudentReducer=(state=inittial,action)=>{
    switch(action.type){
        case ADD_STUDENT:
            state=[...state,action.payload]
            return state
            case DELETE_STUDENT:
                const filterState=state.filter(student=>student.id===action.payload?action.payload:student);
                return filterState;
            default:
                return state
    }
}
export default StudentReducer;