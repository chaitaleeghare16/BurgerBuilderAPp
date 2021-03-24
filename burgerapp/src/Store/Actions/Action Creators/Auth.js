import axiosInstance from '../../../api/axiosInstance'
import * as  actionTypes from '../actionTypes'


export const authstart =()=>{
return{
    type : actionTypes.AUTHSTART
    }
}

export const authsuccess =(token,userId)=>{
    return{
        type : actionTypes.AUTHSUCCESS,
        token:token,
        userId:userId
    }
    }

export const authfail =(error)=>{
        return{
            type : actionTypes.AUTHFAIL,
            error:error
        }
}

export const logout=()=>{
    return{
        type :actionTypes.AUTHLOGOUT,
       
    }
}

export const UserLoggedOut=(expirationtime)=>{
    return dispatch=>{
        setTimeout(()=>{

            dispatch(logout())
        },expirationtime * 1000)

        
    }
}

export const auth =(email,password,isSignUp)=>{
            
            return dispatch =>{
                
                dispatch(authstart())
                const authData= {
                    email : email,
                    password :password,
                    returnSecureToken:true
                            
                }

                let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnMRGOPgvDlFdyOd7M6oKtxf9uu_AGQY0'

                if(!isSignUp)
                {
                    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnMRGOPgvDlFdyOd7M6oKtxf9uu_AGQY0'
                }
                // go on google serach 'firebase rest auth'
                //select option signUp with email and password
                //for [APIKey] => go to project setting -> copy web API key and paste here
                axiosInstance.post(url,authData)
                .then(response=>{
                    console.log(response.data)
                    dispatch(authsuccess(response.data.idToken,response.data.localId))
                    dispatch(UserLoggedOut(response.data.expiresIn))
                })
                .catch(error=>{
                    console.log(error)
                    dispatch(authfail(error))
                })
            }
        }