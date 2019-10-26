import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import config from './../../config.json'
import { toast } from 'react-toastify';

function RegisterStar({voteNumber}) {
    voteNumber = 6 - Math.ceil(voteNumber);
    const stars = [
            {
                id:1, 
                voteNumber:''
            },{
                id:2, 
                voteNumber:''
            },{
                id:3, 
                voteNumber:''
            },{
                id:4, 
                voteNumber:''
            },{
                id:5, 
                voteNumber:''
            }
        ];
        const voteStar = stars.map(star => {
            if(star.id === voteNumber) {
                return {
                    ...star,
                    voteNumber:'selected'
                }
            }else return star;
        })
    return (
        <ul className="stars">
            {
                voteStar.map(star => (
                    <li onClick={(e) => addSelected(e,18)} className={`stars__star ${star.voteNumber}`} key={star.id}></li>
                ))
            }
        </ul>
    )
}

const addSelected = (e,id) => {
    let parent = e.target.parentNode;
    parent.childNodes.forEach(li => {
        if(li.classList.contains('selected')) {
            li.classList.remove('selected')
        }
    })
    e.target.classList.add('selected');
    [].forEach.call(e.target.parentNode.childNodes,function(li,index) {
        if(li === e.target) {
            console.log();
            try {
                const token = localStorage.getItem('token');
                const nickname = localStorage.getItem('nickname');
                axios.post(config.api_send_star,{ 
                    "id":id , 
                    "star": 5 - index,
                    "token": token,
                    "nickname":nickname
                });
                toast.success(`امتیاز ${5 - index} برای این محصول ثبت شد`,{
                        position: toast.POSITION.BOTTOM_LEFT
                })
            }catch(error) {
                console.log(error)
                if(error.response && error.response.status === 401) {
                    toast.error('شما دسترسی به این قسمت را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 400) {
                    toast.error('شما دسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else {
                    toast.error('لطفا اینترنت خود را چک کنید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }
            }
        }
        
        
    })
}





export default connect(state => ({state}))(RegisterStar);
