import {ADD_STUDENT,UPDATE_STUDENT,DELETE_STUDENT} from './actionType'
export const addStudent=(payload)=>{
    return{
        type:ADD_STUDENT,
         payload
    }
}
export const updateStudent=(payload)=>{
    return{
        type:UPDATE_STUDENT,
        payload
    }
}
export const deleteStudent=(payload)=>{
    return{
        type:DELETE_STUDENT,
         payload
    }
}