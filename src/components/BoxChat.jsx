import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ChatUser } from "../actions";
import '../components/FontAwesome/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BoxChat(props) {
    const { user } = props;
    const [content, change] = useState("");
    // Thanh input
    const onChange = (e) => {
        change({
            content: e.target.value,
        });
    };
    //danh sach frien
    const Chats = (user) => {
        let text = null;

        if (user && user.chatroom1) {
            if (user.chatroom1 !== null) {
                text = user.chatroom1.map((item, index) => {
                    if (item.user === "name") {
                        return (
                            <div className="boxchat__content__message__left" key={index}>
                                <img src={item.img} alt="" />
                                <div className="boxchat__content__message__left__content">
                                    <p>{item.content}</p>
                                </div>
                                <div>hihi</div>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="boxchat__content__message__right" key={index}>
                                <div className="boxchat__content__message__right__content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        );
                    }
                });
            }
        }
        else {
            return null;
        }
        return text;
    };
    //xu li button gui tin nhan di
    const onSend = () => {
        const id = props.user.index;
        props.ChatUser(content, id);
        change({
            content: "",
        });
    };
    return (
        <div className="boxchat">
            {/* danh sach frien */}
            <div className="boxchat__content">
                {Chats(user)}
            </div>
            <div className="boxchat__input">
                {/* nhan tin nhan */}
                <div className="boxchat__input__form">
                    <input
                        onChange={onChange}
                        type="text"
                        placeholder="Write your message..."
                    />
                    {/* gui tin nhan */}
                    <div className="boxchat__input__form__icon">
                        <i ><FontAwesomeIcon icon={['fas', 'smile']} /></i>
                        <i onClick={onSend} ><FontAwesomeIcon icon={['fas', 'location-arrow']} /></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
//xu li hien thi tin nhan trong chat
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
//xu li button truyen tn di
const mapDispatchToProps = (dispatch) => {
    return {
        ChatUser: (content, id) => {
            dispatch(ChatUser(content, id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoxChat);
