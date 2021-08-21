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

const datum = [
    {
        id : 1,
        username:"Bayo for BBN2021",
        tag:"john_doe123",
        likes:"12",
    },
    {
        id : 2,
        username:"Bayo for BBN2021",
        tag:"michal_doe213",
        likes:"19",
    }
]

const Header = (props) => (
    <View style={{ borderBottomWidth: 1, borderColor: "rgba(0,0,0,0.2)", height: sh(7), justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingHorizontal: sw(5) }}>
        <Text category="h5" style={{ color: orng }}>{props.title}</Text>
        <Image source={require("../assets/bell.png")} style={{ width: rw(5), height: rw(5), }} />
    </View>
)

const Conversation = ({navigation}) => {

    const [postData, setpostData] = useState(datum)

    const renderPosts = ({item}) => (
        <View style={{  height: rh(75),padding:15,borderBottomWidth:1,borderColor:"rgba(0,0,0,0.1)" }}>
            {console.log("Post: ",item)}
        <Layout style={{ flex: 1, flexDirection:"row",justifyContent:"space-between",alignItems: 'center', }}>
          
                <Layout style={{flexDirection:"row"}}>
                <Image source={require("../assets/prof.png")} style={{ width: rw(10), height: rw(10), }} />
                <Layout style={{marginLeft:10}}>
                    <Text style={{fontWeight:"bold",fontSize:14}} >Bayo for BBN2021</Text>
                    <Text style={{fontSize:13,color:"#898989"}} >@john_doe123</Text>
                </Layout>
                </Layout>
                <Image source={require("../assets/menu.png")} style={{ width: rw(5), height: rw(5), }} />
           
        </Layout>
        <Layout style={{ flex: 7, backgroundColor: "white",marginVertical:5, }}>
        <Image source={require("../assets/postImg.png")} style={{ width:"100%", height: "100%", borderRadius:5 }} resizeMode="contain" />
        </Layout>
        <Layout style={{ flex: 2, justifyContent:"space-around" }}>
            <Layout style={{ width:"100%", backgroundColor: "white",flexDirection:"row",justifyContent:"space-between",alignItems: 'center', }}>
                <Layout style={{flexDirection:"row",width:"45%",justifyContent:"space-between"}}>
                    <Layout style={{flexDirection:"row"}}>
                    <Image source={require("../assets/heart.png")} style={{ width: rw(5), height: rw(5),marginRight:5 }} resizeMode="contain"  />
                    <Text>12</Text>
                    </Layout>
                    <Layout style={{flexDirection:"row"}}>
                    <Image source={require("../assets/comment.png")} style={{ width: rw(5), height: rw(5),marginRight:5 }} resizeMode="contain"  />
                    <Text>21</Text>
                    </Layout>
                    <Layout style={{flexDirection:"row"}}>
                    <Image source={require("../assets/share.png")} style={{ width: rw(5), height: rw(5),marginRight:5 }} resizeMode="contain"  />
                    <Text>11</Text>
                    </Layout>
                </Layout>
                <Layout>
                    <Text style={{backgroundColor:"#2D91ED",color:"white",padding:10,borderRadius:10}}>Nigera Idol</Text>
                </Layout>
            </Layout>
            <TouchableOpacity onPress={()=> navigation.navigate("Comments")} >
            <Text style={{fontSize:13,color:"#898989"}} >View all 5 comments</Text>
            </TouchableOpacity>
           
            <Text style={{fontWeight:"bold"}} >Mimi1800 <Text style={{fontSize:13,color:"#898989"}} > Amaka for win</Text></Text>
        </Layout>
    </View>
    )

    return (
        <View style={styles.back}>
            {console.log("Post data: ",postData)}
            <Header title="Vote Beta" />
            <FlatList
                data={postData}
                renderItem={renderPosts}
                keyExtractor={(index,item) => index.toString()}
                // extraData={selectedId}
            />
        </View>
    )
}

export default Conversation

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: "white"
    }
})
