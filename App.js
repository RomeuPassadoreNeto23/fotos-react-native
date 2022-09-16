import 'react-native';
import React, { Component } from 'react';
import { Platforms, StyleSheet, Text, View, Button, Modal, Image, TouchableHighlight } from 'react-native'
import PicturesList from './app/components/PicturesList'
import CameraDialog from './app/components/CameraDialog';
export default class App extends Component {
  state = {
    picturesList: [
      { id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPXJG_SNtBWL7j4GyT25Ug8f5mgXf3VUmsw&usqp=CAU' },
      { id: '2', url: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/03/11/elden-ring-_1_-1.jpeg' },
      { id: '3', url: 'https://assets.reedpopcdn.com/elden-ring-farming-spots-best-locations-runes-early-late-game-8042-1645632901614.jpg/BROK/thumbnail/1600x900/quality/100/elden-ring-farming-spots-best-locations-runes-early-late-game-8042-1645632901614.jpg' },
      { id: '4', url: 'https://sm.ign.com/t/ign_br/screenshot/default/eldenring-quando-sera-possivel-jogar_33ty.1200.jpg' },
      { id: '5', url: 'https://tudogames.net/wp-content/uploads/2022/04/elden-ring-facil.jpg' },
      { id: '6', url: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/11/Elden-Ring-Key-Art-e1637061164566.jpg' },
      { id: '7', url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/elden-ring-2635169.jpg?itok=IusLqe4O' },
      { id: '8', url: 'https://media.altchar.com/prod/images/940_530/gm-86893bef-6fcc-41d7-95d2-2d3f19d97ba0-cj-in-elden-ring.jpg' },
      { id: '9', url: 'https://assets1.ignimgs.com/thumbs/userUploaded/2022/5/11/elden-ring-mods-blog-1652281291911.jpg' },
      { id: '10', url: 'https://s.yimg.com/ny/api/res/1.2/RMmOzyWnKOIZFyyiWmc37Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/mYxHPo4ShIdxUZ.YMltmdw--~B/aD0zNTg7dz02MzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/kotaku_564/5e5b6e40524a6b2f07b94e96a58aed18' },
      { id: '11', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPXJG_SNtBWL7j4GyT25Ug8f5mgXf3VUmsw&usqp=CAU' },
      { id: '12', url: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/03/11/elden-ring-_1_-1.jpeg' },
      { id: '13', url: 'https://assets.reedpopcdn.com/elden-ring-farming-spots-best-locations-runes-early-late-game-8042-1645632901614.jpg/BROK/thumbnail/1600x900/quality/100/elden-ring-farming-spots-best-locations-runes-early-late-game-8042-1645632901614.jpg' },
      { id: '14', url: 'https://sm.ign.com/t/ign_br/screenshot/default/eldenring-quando-sera-possivel-jogar_33ty.1200.jpg' },
      { id: '15', url: 'https://tudogames.net/wp-content/uploads/2022/04/elden-ring-facil.jpg' },
      { id: '16', url: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/11/Elden-Ring-Key-Art-e1637061164566.jpg' },
      { id: '17', url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/elden-ring-2635169.jpg?itok=IusLqe4O' },
      { id: '18', url: 'https://media.altchar.com/prod/images/940_530/gm-86893bef-6fcc-41d7-95d2-2d3f19d97ba0-cj-in-elden-ring.jpg' },
      { id: '19', url: 'https://assets1.ignimgs.com/thumbs/userUploaded/2022/5/11/elden-ring-mods-blog-1652281291911.jpg' },
      { id: '20', url: 'https://s.yimg.com/ny/api/res/1.2/RMmOzyWnKOIZFyyiWmc37Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/mYxHPo4ShIdxUZ.YMltmdw--~B/aD0zNTg7dz02MzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/kotaku_564/5e5b6e40524a6b2f07b94e96a58aed18' },
    ],
    isModalOpen: false

  }
  onPictureSelect = (item) => {

  }
  openModal = () => {
    this.setState({ isModalOpen: true })

  }
  closeModal = (response) => {
    this.setState({ isModalOpen: false });

  }
  render() {
    const { state } = this;
    return (
      <View style={styles.container}>
        <PicturesList list={this.state.picturesList} onClick={this.onPictureSelect} />
        <View style={styles.footer}>
          <Button
            onPress={this.openModal}
            title="Nova Foto"
            color="#0062ac"

          />
          <CameraDialog isOpen={state.isModalOpen} onclose={this.closeModal} />
        </View>


      </View>

    )
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center'


  }
});