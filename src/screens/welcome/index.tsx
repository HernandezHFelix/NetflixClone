import * as React from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import style from './style';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/typesNavigation'

const welcome = ({navigation }: StackScreenProps<RootStackParamList, 'NotFound'>) => {
    return (
        <View style={style.carousel_container}>
            <View style={{width: '90%', height:'100%', alignContent: 'center', alignItems:'center'}}>
                <View style={{height:400, width:'90%', top: 0}}>
                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 70}}>
                        <Image
                            style={{width:380, height: 270, resizeMode: 'contain',}}
                            source={{uri:'https://hackstore.rs/wp-content/uploads/2023/05/ioMtng0qHbwNjR1fuxYZsRf1kjm-200x300.jpg'}}
                        />
                    </View>
                    <View style={{textAlign:'center' ,marginTop: 15}}>
                        <Text style={{color:'#fff', fontSize:36, fontWeight:'600'}}>
                            Unlimited entertainment, one low price.
                        </Text>
                        <Text style={{color:'#fff', fontSize:18, marginTop: 10}}>
                            Everything on Netflix, starting at just $149
                        </Text>
                    </View>
                </View>
                <View style={{width:'100%', position:'absolute', bottom: 0}}>
                    <View >
                        <TouchableHighlight onPress={()=>navigation.replace('Root')} style={style.touchable_button}>
                            <View style={{textAlign: 'center'}}>
                                <Text style={{color:'#FFF', fontSize:12, fontWeight: 'bold'}}>GET STARTED</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default welcome;