import React, { useState } from 'react'
import { Pressable, FlatList, ScrollView, View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 
//import {  } from '../../components/themed'
import styles_movie from './styles';
import styles from '../../styles/style';
import colors from '../../constants/colors';
import movie from '../../data/movies'
import EpisodeItem from '../../components/episodeItem/index'
import VideoPlayer from '../../components/videoPlayer/index';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const movieDetailsScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View style={styles.view_container}>
            <ScrollView>
                <VideoPlayer episode={currentEpisode} />            
                <FlatList
                    data={currentSeason.episodes.items}
                    renderItem={({ item }) => (
                        <EpisodeItem 
                        episode={item} 
                        onPress={setCurrentEpisode}
                    />)}
                    style={{ marginBottom: 20 }}
                    ListHeaderComponent={(
                        <View style={styles_movie.listContainer}>
                            <Text style={styles_movie.title}>{movie.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles_movie.match}>98% match</Text>
                                <Text style={styles_movie.year}>{movie.year}</Text>
                                <View style={styles_movie.ageContainer}>
                                    <Text style={styles_movie.age}>12+</Text>
                                </View>
                                <Text style={styles_movie.year}>{movie.numberOfSeasons} Seasons</Text>
                                <MaterialIcons name="hd" size={24} color="white" />
                            </View>

                            {/* Play Button */}
                            <Pressable onPress={() => { console.warn('Plage')}} style={styles_movie.playButton}>
                                <Text style={styles_movie.playButtonText}>
                                    <Entypo name="controller-play" size={16} color="black" />
                                    Play
                                </Text>
                            </Pressable>

                            {/* Download Button */}
                            <Pressable onPress={() => { console.warn('Download')}} style={styles_movie.downloadButton}>
                                <Text style={styles_movie.downloadButtonText}>
                                    <AntDesign name="download" size={16} color="white" />
                                    {' '}
                                    Download
                                </Text>
                            </Pressable>

                            <Text style={{ marginVertical: 10, color:'#fff' }}>{movie.plot}</Text>
                            <Text style={styles_movie.year}>Cast: {movie.cast}</Text>
                            <Text style={styles_movie.year}>Creator: {movie.creator}</Text>
                        
                            {/* Row with icon buttons */}
                            <View style={{flexDirection: 'row', width: '100%' , marginTop: 10, marginBottom: 20, marginLeft: 80,alignContent:'center'}}>
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <AntDesign name="plus" size={17} color={'white'} />
                                    <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                                </View>
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <Feather name="thumbs-up" size={16} color="white" />
                                    <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                                </View>
                                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                    <FontAwesome name="send-o" size={16} color="white" />
                                    <Text style={{color: 'darkgrey', marginTop: 5 }}>Share</Text>
                                </View>
                            </View>

                            <Picker
                                selectedValue={currentSeason.name}
                                onValueChange={(itemValue, itemIndex) => {
                                    setCurrentSeason(movie.seasons.items[itemIndex])
                                }}
                                style={
                                    {
                                    backgroundColor: '#2b2b2b',
                                    width: '100%', 
                                    height:30, 
                                    borderRadius: 3, 
                                    color:'#fff',
                                    fontSize:14
                                    }
                                }
                                itemStyle={{fontFamily:"Ebrima", fontWeight: '600'}}
                                dropdownIconColor={'white'}
                            >
                                {
                                    seasonNames.map(seasonName => (
                                    <Picker.Item style={{backgroundColor:'#000'}} label={seasonName} value={seasonName} key={seasonName} />
                                    ))
                                }
                            </Picker>
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )
};

export default movieDetailsScreen;