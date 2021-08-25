import React from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Text, Input, } from '@ui-kitten/components';
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveScreenWidth as sw,
    responsiveScreenHeight as sh
} from 'react-native-responsive-dimensions';

const orng = "#F28A31"
const gray = "#EEEEEE"

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const Add_Group_Conversation = () => {

    const multilineInputState = useInputState();
    const mediumInputState = useInputState();


    return (
        <ScrollView contentContainerStyle={{ height: sh(85), backgroundColor: "white" }}>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: "space-around", }}>
       
                <View style={{ width: sw(80), marginTop: 5 }}>
                    <Text style={{ fontWeight: "bold" }} >Conversation Title</Text>
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='This is title'
                        {...mediumInputState}
                    />
                </View>

                <View style={{ width: sw(80) }}>
                    <Text style={{ fontWeight: "bold", marginTop: 5 }} >Description</Text>

                    <Input
                        style={[styles.input, { alignItems: "flex-start", justifyContent: "flex-start", alignSelf: "flex-start" }]}

                        multiline={true}
                        textStyle={{ minHeight: rh(15) }}
                        placeholder='This is the compaign description'
                        {...multilineInputState}
                    />
                </View>
                <View style={{ width: sw(80), marginTop: 5 }}>
                    <Text style={{ fontWeight: "bold" }} >Select Competition</Text>
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Select competition with others'
                        {...mediumInputState}
                    />
                </View>
                <View style={{ width: sw(80), marginTop: 5 }}>
                    <Text style={{ fontWeight: "bold" }} >Competition Name</Text>

                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Enter the name of compition'
                        {...mediumInputState}
                    />
                </View>

            </View>

            <View style={{ flex: 0.30, justifyContent: "flex-end", alignItems: 'center', }}>
                <Button style={{ width: sw(80), backgroundColor: orng, borderWidth:0,marginBottom: 25, borderRadius: 10 }} size='large' appearance='filled' >
                    <Text style={{ fontSize: 18 }} >Create</Text>
                </Button>
            </View>

        </ScrollView>
    )
}

export default Add_Group_Conversation

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
    },

})
