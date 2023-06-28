import * as React from 'react';
import { Text, View, FlatList, Image, StyleSheet, ScrollView, ImageBackground   } from 'react-native';
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
                            <View>
                                <Text>Play</Text>
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
  });