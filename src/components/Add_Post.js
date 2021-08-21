import React from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Text, Input, } from '@ui-kitten/components';
// import { useHeaderHeight } from '@react-navigation/native-stack'
import { 
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveScreenWidth as sw,
    responsiveScreenHeight as sh,
    
 } from 'react-native-responsive-dimensions';
// const headerHeight = useHeaderHeight;
// console.log("Header Height: ", headerHeight)
const orng = "#F28A31"
const gray = "#EEEEEE"

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

// export const getHeaderHeight = () => {
//     let height;
//     const orientation = getOrientation();
//     height = getHeaderSafeAreaHeight();
//     height += DeviceInfo.isIPhoneX_deprecated && orientation === PORTRAIT ? 24 : 0;
  
//     return height;
//   };

const Add_Post = ({navigation}) => {

    const multilineInputState = useInputState();
    const mediumInputState = useInputState();


    return (
        <ScrollView contentContainerStyle={{height : sh(85), backgroundColor: "white" }}>
            <View style={{ flex: 0.75, alignItems: 'center', justifyContent:"space-around", }}>
                {/* <Text category="h2" > Upper layouts </Text> */}
                <TouchableOpacity style={{ width: sw(65), height: rh(25), backgroundColor: gray, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Image source={require("../assets/camera.png")} style={{ width: rw(7), height: rw(7), tintColor: orng }} />
                    <Text  style={{marginTop:10,fontWeight:"bold",fontSize:14}} >Add Photo</Text>
                </TouchableOpacity>

                <View style={{width:sw(80)}}>
                <Text style={{fontWeight:"bold",marginTop:5}} >Description  </Text>
                  
                    <Input
                         style={[styles.input,{alignItems:"flex-start",justifyContent:"flex-start",alignSelf:"flex-start"}]}
                         
                        multiline={true}
                        textStyle={{ minHeight: rh(12) }}
                        placeholder='This is the compaign description'
                        {...multilineInputState}
                    />
                </View>
                <View style={{width:sw(80),marginTop:5}}>
                <Text style={{fontWeight:"bold"}} >Select Competition</Text>
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Select competition with others'
                        {...mediumInputState}
                    />
                </View>
                <View style={{width:sw(80),marginTop:5}}>
                <Text style={{fontWeight:"bold"}} >Competition Name</Text>
                   
                    <Input
                         style={styles.input}
                        size='medium'
                        placeholder='Enter the name of compition'
                        {...mediumInputState}
                    />
                </View>

            </View>

            <View style={{ flex: 0.25, justifyContent: "flex-end", alignItems: 'center', }}>
                <Button onPress={()=>navigation.navigate("Add_Group_Conversation")} style={{ width: sw(80), backgroundColor: orng, marginBottom: 25, borderRadius: 10,borderWidth:0 }} size='large' appearance='filled' >
                    <Text style={{ fontSize: 18 }} >Create</Text>
                </Button>
            </View>

        </ScrollView>
    )
}

export default Add_Post

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
      },
    
})
