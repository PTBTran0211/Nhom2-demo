
import * as types from '../constants/index'
const init = [
    {
        id : 0,
        img: "https://hoso.wiki/wp-content/uploads/2020/08/roronoa-zoro.jpg",
        name: "Zoro",
        desc: "Hello Luffy",
        time: "11:15",
        chatroom1 : [
            {
                img: "https://hoso.wiki/wp-content/uploads/2020/08/roronoa-zoro.jpg",
                content: "Hey Lufy", 
                user : "name", 
                timeAt : '10:00' 
            },
            {
                img: "https://hoso.wiki/wp-content/uploads/2020/08/roronoa-zoro.jpg",
                content: "How are you", 
                user : "name", 
                timeAt : '10:01'
            },
            { 
                content: "I'm fine. !", 
                user : "my",
                timeAt : '10:03'
            },
            {
                img: "https://hoso.wiki/wp-content/uploads/2020/08/roronoa-zoro.jpg",
                content: "Yessss <3", 
                user : "name", 
                timeAt : '10:04' 
            },
            { 
                content: "And you?", 
                user : "my",
                timeAt : '10:05'
            },
        ]
        
    },
    {
        id : 1,
        img: "https://ecdn.game4v.com/g4v-content/uploads/2021/05/Sanji-Oda-1-game4v.jpg",
        name: "Sanji",
        desc: "Hello Luffy",
        time: "11:00",
        chatroom1 : [
            {
                img: "https://ecdn.game4v.com/g4v-content/uploads/2021/05/Sanji-Oda-1-game4v.jpg",
                content: "Hey Lufy. 1234", 
                user : "name", 
                timeAt : '10:00' 
            },
            {
                img: "https://ecdn.game4v.com/g4v-content/uploads/2021/05/Sanji-Oda-1-game4v.jpg", 
                content: "How are you", 
                user : "name", 
                timeAt : '10:01'
            },
            { 
                content: "I'm fine. !", 
                user : "my",
                timeAt : '10:03'
            },
            {
                img: "https://ecdn.game4v.com/g4v-content/uploads/2021/05/Sanji-Oda-1-game4v.jpg",
                content: "Yessss <3", 
                user : "name", 
                timeAt : '10:04' 
            },
            { 
                content: "And you?", 
                user : "my",
                timeAt : '10:05'
            },
        ]

    },
    {
        id : 2,
        img: "https://hosonhanvat.net/wp-content/uploads/2020/08/usopp-01.jpg",
        name: "Usopp",
        desc: "I will send the mail...",
        time: "10:05",
        chat : null,
        chatroom1 : [
            {
                img: "https://hosonhanvat.net/wp-content/uploads/2020/08/usopp-01.jpg",
                content: "How are you", 
                user : "name", 
                timeAt : '10:01'
            },
            {
                content: "I'm fine. !", 
                user : "my",
                timeAt : '10:03'
            },
            { 
                img: "https://hosonhanvat.net/wp-content/uploads/2020/08/usopp-01.jpg",
                content: "Yessss <3", 
                user : "name", 
                timeAt : '10:04' },
            { 
                content: "And you?", 
                user : "my",
                timeAt : '10:05'
            },
        ]


    },
    {
        id : 3,
        img: "https://s199.imacdn.com/ta/2016/09/08/78f386ad0d895ab9_6593b6f9bc2d8143_12069414733148881143215.jpg",
        name: "Nami",
        desc: "Hello !",
        time: "15:09",
        chat : null,
        chatroom1 : [
            
        { 
            img: "https://s199.imacdn.com/ta/2016/09/08/78f386ad0d895ab9_6593b6f9bc2d8143_12069414733148881143215.jpg",
            content: "Alo Lufy", 
            user : "name", 
            timeAt : '10:00' 
        },
        { 
            img: "https://s199.imacdn.com/ta/2016/09/08/78f386ad0d895ab9_6593b6f9bc2d8143_12069414733148881143215.jpg",
            content: "How are you", 
            user : "name", 
            timeAt : '10:01'
        },
        { 
            content: "I'm fine. !", 
            user : "my",
            timeAt : '10:03'
        },
        { 
            img: "https://s199.imacdn.com/ta/2016/09/08/78f386ad0d895ab9_6593b6f9bc2d8143_12069414733148881143215.jpg",
            content: "Yessss <3", 
            user : "name", 
            timeAt : '10:04' 
        },
        { 
            content: "And you?", 
            user : "my",
            timeAt : '10:05'
        },
        ]


    },
    
]
var findIndex = (products,id)=>{
    var result = -1
    products.forEach((product,index)=>{
      if (product.id===id){
        result = index
      }
    })
    return result
  }
const data = (state = init,action)=>{
    var text = action.content
    var stt = -1
    var id = action.id
    switch(action.type){
        case types.CHAT_USER:
            stt = findIndex(state,id)
            if (stt!==-1){
                state.map((items,index) => {
                    if (stt===index){
                        items.chatroom1.push({content : text.content, user : 'my'})   
                       
                        }                    
                    })
                }
            return state 
        default : return state      
    }
}
export default data