import {ADD_STUDENT,EDIT_STUDENT,DELETE_STUDENT} from './actionType'
export const addStudent=(payload)=>{
    return{
        type:ADD_STUDENT,
         payload
    }
}
export const deleteStudent=(payload)=>{
    return{
        type:DELETE_STUDENT,
         payload
    }
}