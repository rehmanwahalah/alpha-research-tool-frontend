import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { authService } from '../../services/auth.service';
import { HttpService } from '../../services/base.service';
import { userService } from '../../services/user.service';
import { verifyUserByToken } from '../../store/auth/async.func';
// import Login from '../module/login/Login'
// import Project from '../module/project/Project'

const verifyJWTToken = () => {
    const { query } = useRouter();
    const dispatch = useDispatch()

    
    const verifyToken = async () => {
        try {
            dispatch(verifyUserByToken())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(query.id) {
            console.log(query.id, "query.id")
            HttpService.setToken(query.id)
            verifyToken()
        }
    },[query])

  return <>
        Loading ...
  </>
}

export default verifyJWTToken