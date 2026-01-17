import React from 'react'
import { useState,useEffect } from 'react'
import { Container,PostForm } from '../components'
import appwriteService from '../appwrite/config_service'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post,setPost]=useState(null)
    const {slug}=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then( (post)=>{
                if(post){
                    setPost(post)
                }
                else{
                    navigate('/')
                }
            })
        }
    },[slug,navigate])
  return  post ? (
    <div className='py-8'>
        <PostForm/>
    </div>
  ) : null
}

export default EditPost
