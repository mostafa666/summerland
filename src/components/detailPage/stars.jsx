import React from 'react';
import { connect } from 'react-redux';


function Starts({voteNumber}) {
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
                    <li className={`stars__star ${star.voteNumber}`} key={star.id}></li>
                ))
            }
        </ul>
    )
}

// const addSelected = (e) => {
//     let parent = e.target.parentNode;
//     parent.childNodes.forEach(li => {
//         if(li.classList.contains('selected')) {
//             li.classList.remove('selected')
//         }
//     })
//     e.target.classList.add('selected');
// }





export default connect(state => ({state}))(Starts);
