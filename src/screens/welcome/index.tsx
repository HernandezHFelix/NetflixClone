import * as React from 'react';
import { Text, View, Image, Dimensions} from 'react-native';
import style from './style';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}

export default class welcome extends React.Component {
    state = {
        index: 0
    } 
    
    constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
    }

    _renderItem({ item }) {
    return (
        <View style={style.itemContainer}>
        <Text style={style.itemLabel}>{`Item ${item}`}</Text>
        </View>
    );
    }

    render()  {
        return (
            <View style={style.carousel_container}>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={DATA}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={style.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => this.setState({ index })}
                    useScrollView={true}          
                />
                <Text style={{color: '#fff'}}>welcome</Text>
            </View>
        );
    }
};