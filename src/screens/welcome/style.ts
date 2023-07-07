import {StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const style = StyleSheet.create({
    carousel_container: {
        flex:1,
        width: '100%',
        height: '100%',
        paddingTop: 0,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent:'center',
        color: '#fff',
    },
    carouselContainer: {
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    touchable_button: {
        width: '100%',
        backgroundColor: 'red',
        height:33,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default style;