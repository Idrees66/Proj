import React,{useState} from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Button, Text, Input, Layout } from '@ui-kitten/components';
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveScreenWidth as sw,
    responsiveScreenHeight as sh,

} from 'react-native-responsive-dimensions';

const orng = "#F28A31"
const gray = "#EEEEEE"

const commentData = [
    {
        cid:1,
        message : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
        likes : "21",
        username : "Floki Anderson",
        profileId : "210",
        postId : "123",
        postDate : "17-07-2020",
        totalComments : 11
    },
    {
        cid:2,
        message : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
        likes : "21",
        username : "Ouewusi Michal",
        profileId : "210",
        postId : "123",
        postDate : "17-07-2020",
        totalComments : 11
    },
    {
        cid:3,
        message : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
        likes : "21",
        username : "Floki Anderson",
        profileId : "211",
        postId : "123",
        postDate : "17-07-2020",
        totalComments : 11
    },
]

const Header = (props,{}) => (
    <View style={{  borderColor: "rgba(0,0,0,0.2)", height: sh(7), flexDirection: "row", alignItems: "center", paddingHorizontal: sw(5) }}>
        <TouchableOpacity onPress={()=>props.nav.goBack()} >
         <Image source={require("../assets/left-arrow.png")} style={{ width: rw(5), height: rw(5), }} />
        </TouchableOpacity>
        
        <Text category="h5" style={{ marginLeft:30 }}>{props.title}</Text>
        
    </View>
)

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};



const Comments = ({navigation}) => {

    const userComment = useInputState();
    const userReply = useInputState();
    const [commentdata, setcommentdata] = useState(commentData)
    const [selectedComment, setselectedComment] = useState(null)
    const [repliedComment, setrepliedComment] = useState(null)
    
    const renderComments = (data) => {
        const { message,likes,username,profileId,totalComments,postDate} = data.item
         console.log("Comment Reply",repliedComment)
        return (
            <Layout>
            <Layout style={{ flexDirection: "row", width: "100%", paddingHorizontal: "5%", justifyContent: "space-between", marginTop:"5%" }} >
                <Image source={require("../assets/prof.png")} style={{ width: rw(10), height: rw(10), borderRadius: 20 }} resizeMode="contain" />
                <Layout style={{ width: "85%" }} >
                    <Layout level='3' style={{ width: "100%", padding: 10, borderRadius: 10 }} >
                        <Layout level='3' style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }} >
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}  >{username}</Text>
                            <Text style={{ fontSize: 8, }}  >22 Mins ago</Text>
                        </Layout>
                        <Text style={{ fontSize: 12, color: "#6A6A6A", marginTop: 10, letterSpacing: 0, width: "100%", }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </Text>
                        <Image source={require("../assets/heart.png")} style={{ width: rw(3), height: rw(3), marginRight: 4, alignSelf: "flex-end", }} resizeMode="contain" />
                    </Layout>
                    <Layout style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text style={{ fontSize: 11, color: "#BCBCBC" }} > 14 Likes</Text>
                        <TouchableOpacity onPress={()=>{
                            setselectedComment(data.item)
                        }}>
                        <Text style={{ fontSize: 11, color: "#BCBCBC", marginLeft: 10 }} > Reply</Text>
                        </TouchableOpacity>
                       
                    </Layout>
                </Layout>
            </Layout>
            <Layout>
             
                {((selectedComment) && (selectedComment.cid==data.item.cid) && (repliedComment)) ? (
            <Layout style={{ flexDirection: "row", width: "90%", paddingHorizontal: "5%", justifyContent: "space-between", marginTop:"5%",alignSelf: "flex-end", backgroundColor: "white", }} >
            <Image source={require("../assets/prof.png")} style={{ width: rw(10), height: rw(10), borderRadius: 20 }} resizeMode="contain" />
            <Layout style={{ width: "85%" }} >
                <Layout level='3' style={{ width: "100%", padding: 10, borderRadius: 10 }} >
                    <Layout level='3' style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }} >
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}  >{repliedComment.reply.username}</Text>
                        <Text style={{ fontSize: 8, }}  >{repliedComment.reply.replyTime}</Text>
                    </Layout>
                    <Text style={{ fontSize: 12, color: "#6A6A6A", marginTop: 10, letterSpacing: 0, width: "100%", }} >repliedComment.reply.userReply </Text>
                    <Image source={require("../assets/heart.png")} style={{ width: rw(3), height: rw(3), marginRight: 4, alignSelf: "flex-end", }} resizeMode="contain" />
                </Layout>
                <Layout style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontSize: 11, color: "#BCBCBC" }} >{repliedComment.reply.replyLikes}  Likes</Text>
                   
                   
                </Layout>
            </Layout>
        </Layout>
                ) : null}

            </Layout>
            </Layout>
        )
    }

    function postComment(){
        const comment = {
            message : userComment,
            likes : "0",
            username : "My Comment",
            profileId : "210",
            postId : "123",
            postDate : "17-07-2020",
            totalComments : 0
        }

        commentdata.push(comment)
        
    }

    function postReply(){

        const replyObj = {
            selectedComment,
            reply:{
                userReply,
                replyLikes:"14",
                replyTime:"12 Mins ago",
                username:"John Doe"
            }
            
        }

        setrepliedComment(replyObj)

        console.log("Replied")
        // const comment = {
        //     message : userComment,
        //     likes : "0",
        //     username : "My Comment",
        //     profileId : "210",
        //     postId : "123",
        //     postDate : "17-07-2020",
        //     totalComments : 0
        // }

        // commentdata.push(comment)
        
    }

    return (
        
        <Layout style={styles.back}>
            {console.log("Selected Comment: ",selectedComment)}
            <Header title="Comments" nav={navigation} />
            <FlatList
                data={commentdata}
                renderItem={(item)=>renderComments(item)}
                keyExtractor={(index, item) => item.cid}
            // extraData={selectedId}
            />

{(!selectedComment) ? (
 <Layout style={{flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems: 'center',}}>
 
 <Input
     style={styles.input}
     size='medium'
     placeholder='What do you want to say?'
     {...userComment}
 />
 <TouchableOpacity onPress={()=>postComment()} >
 <Image source={require("../assets/send2.png")} style={{ width: rw(5), height: rw(5),tintColor:orng,marginRight:"7%", }} resizeMode="contain" />
 </TouchableOpacity>
  
</Layout>
) : (
    <Layout style={{flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems: 'center',}}>
 
    <Input
        style={styles.input}
        size='medium'
        placeholder='Type Reply..'
        {...userReply}
    />
    <TouchableOpacity onPress={()=>postReply()} >
    <Image source={require("../assets/send2.png")} style={{ width: rw(5), height: rw(5),tintColor:orng,marginRight:"7%", }} resizeMode="contain" />
    </TouchableOpacity>
     
</Layout>
)}
           
        </Layout>
    )
}

export default Comments

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: "white"
    },
    input: {
        marginTop: 10,
        alignSelf:"flex-end",
        width:"80%"
      },
})
