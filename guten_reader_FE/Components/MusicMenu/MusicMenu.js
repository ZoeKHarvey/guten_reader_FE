import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import '../../assets/volume-on.png'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, withNavigation } from 'react-navigation';

class MusicMenu extends Component {
  constructor() {
    super();

    this.state = {
      paused: true
    }
  }

  state = {isMuted: false}

  toggleSound = () => {
    this.state.isMuted ? this.setState({isMuted: false}) : this.setState({isMuted: true})
  }

  // Function to successfully fetch song, return in URL

  render() {
    // const track = ^^^ song URL in this.state.currentSong or whatever
    // gets confusing:
    //    const video = this.state.isChanging ? null : (
      // <Video source={{uri: track.audioURL}}
      // paused={this.state.paused} pauses playback
      // maybe move sound/mute to two separate buttons, when one is pushed, isPaused is true, whatever
    // )
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleSound}>
          {this.state.isMuted === true && <Image style={styles.volume} source={require('../../assets/volume-on.png')} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleSound}>
          {!this.state.isMuted && <Image style={styles.mute} source={require('../../assets/mute.png')} />}
        </TouchableOpacity>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Library')} title="BACK"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#53E69B',
    justifyContent: 'center',
    height: 65,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  volume: {
    height: 50,
    resizeMode: 'contain'
  },
  mute: {
    height: 50,
    resizeMode: 'contain'
  }

});

export default withNavigation(MusicMenu);
