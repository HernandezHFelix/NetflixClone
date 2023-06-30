import * as React from 'react';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { 
    Text,
    View, 
    FlatList, 
    StyleSheet, 
    ScrollView, 
    ImageBackground,
    Button,
    TouchableHighlight
} from 'react-native';
import styles from '../../styles/style';
import categories from '../../data/categories';
import HomeCategory from '../../components/homeCategory';

export default function App() {
    return (
        <View style={styles.containerHome}>
            <ScrollView>
                <View style={{width:'100%'}}>
                    <View>
                        <ImageBackground style={style.image} source={{uri: categories.specialmovie.poster}}>
                            <View style={style.container_icon_media}>
                                <TouchableHighlight onPress={()=>{}} style={style.touchable_button}>
                                    <View>
                                        <Ionicons name="play" size={12} color={'##000'}>
                                            <Text style={{color:'#000', fontSize:12, fontWeight: '600'}}>Play</Text>
                                        </Ionicons>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <FlatList
                    data={categories.items}
                    renderItem={({item}) => <HomeCategory category={item} />}
                />    
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'stretch',
      borderRadius: 5,
      margin: 5,
    },
    container_icon_media: {
        position: 'absolute', 
        marginTop: 250, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable_button: {
        width: 70,
        borderRadius:5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });