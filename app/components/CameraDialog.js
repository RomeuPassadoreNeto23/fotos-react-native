import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Modal, Image, TouchableOpacity } from 'react-native'
class CameraDialog extends Component {
    static defaultProps = {
        isOpen: false,
        onclose:() => {}
    }
    state ={
        CurrentImage: 'https://i.ytimg.com/vi/b_FKkxVJfZk/maxresdefault.jpg'
    }
    getImageFromClipboard = () => {

    }
    save = () => {
        this.props.onclose();

    }
    shot = () => {

    }


    render() {
        const { props ,state } = this;
        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={props.isOpen}>
                 <View style={styles.modalView}>
                 <View style={styles.previewContainer}>
                    <Image source={{uri:state.CurrentImage}} style={styles.preview} />
                    <TouchableOpacity onPress={ props.onclose }>
                        <Text style={styles.closeButton}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                <Button
                 title='Salvar'
                 onPress={this.save}
                 color='#0062ac'
                />
                 <Button
                 title='Bater'
                 onPress={this.shot}
                 color='#0062ac'
                />
                 <Button
                 title='Colar'
                 onPress={this.getImageFromClipboard}
                 color='#0062ac'
                />
                </View>
                 </View>
            </Modal>

        );
    }
}
const styles = StyleSheet.create({
    modalView:{
        flex:1

    },
    previewContainer:{
        backgroundColor:'gray',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,

    },
    preview:{
        width:100,
        height:75,
        borderWidth: 2,
        color:'red'

    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color:'white'


    },
    buttonContainer:{
        padding:5,
        flexDirection : 'row',
        justifyContent:'space-between',
        height:50,
        backgroundColor: 'black',
    }

  });
export default  CameraDialog