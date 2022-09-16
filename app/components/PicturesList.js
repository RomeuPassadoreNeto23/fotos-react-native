import React, { Component } from "react";
import { FlatList, Image,  TouchableHighlight, View } from "react-native";
class PicturesList extends Component {
    static defaultProps = {
        list: [],
        onClick: () => {

        }

    }
    render() {
        const { props } = this;
        const KeyExtractor = item => item.id;
        return (

            <View style={{ flex: 1 }}>
                <FlatList
                    numColumns={5}
                    data={props.list}
                    KeyExtractor={KeyExtractor}
                    renderItem={({ item }) =>  <PicturesListItem onClick={props.onClick} item={item}    /> }
                />
            </View>
        )
    }

   


}
function PicturesListItem(props) {
    const { item } = props;
    return (
        <TouchableHighlight onPress={() => {props.onClick(item)}}>
            <Image source={{ uri: item.url }}
                style={{
                    width: 80,
                    height: 80
                }}
            />
        </TouchableHighlight>

    );
}

export default PicturesList;