import React from 'react'
import { connect} from 'react-redux'
import { View } from '../actions'

function Contact(props) {
    const onView = (item,index) => {
        props.View(item,index)
    }
    const loadUsers = (items) => {
        let HTML = null
        HTML = items.map((item, index) => {
            return (
                <div className="contact__friends__list__item" key={index} onClick={() =>onView(item,index)}>
                    <img src={item.img} alt=""  />
                    <div className="contact__friends__list__item__content">
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                    <span>{item.time}</span>
                </div>
            )
        })
        return HTML
    }
    
    return (
        <div className="contact">
            <div className="contact__friends">
                <div className="contact__friends__list">
                    {
                        loadUsers(props.data)
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        data : state.data
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        View : (item,index)=>{
            dispatch(View(item,index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)
