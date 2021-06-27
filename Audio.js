import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

const root = 'http://158.101.161.91/';
const img_audio = {uri: root+'audio.png'};
const img_mute = {uri: root+'mute.png'};
const img_pause = {uri: root+'pause.png'};
const img_play = {uri: root+'play.png'};

export default class Audio extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      playState:'paused',
      volumeState:'audio',
      playSeconds:0,
      duration:0,
    };
    this.sliderEditing = false;
  }
  componentDidMount(){
    this.play();
    
    this.timeout = setInterval(() => {
      if(this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing){
        this.sound.getCurrentTime((seconds, isPlaying) => {
          this.setState({playSeconds:seconds});
        })
      }
    }, 100);
  }
  componentWillUnmount(){
    this.setState = (state)=>{
      return;
    };
    if(this.sound){
      this.sound.release();
      this.sound = null;
    }
    if(this.timeout){
      clearInterval(this.timeout);
    }
  }
  onSliderEditStart = () => {
    this.sliderEditing = true;
  }
  onSliderEditEnd = () => {
    this.sliderEditing = false;
  }
  onSliderEditing = value => {
    if(this.sound){
        this.sound.setCurrentTime(value);
        this.setState({playSeconds:value});
    }
  }
  play = (props) => {
    if(this.sound){
      this.sound.play(this.playComplete);
      this.setState({playState:'playing'});
    }else{
      const filepath = root+this.props.id+'.mp3';
      this.sound = new Sound(filepath, '', (error) => {
        if (error) {
          Alert.alert('Notice', 'audio file error. (Error code : 1)');
          this.setState({playState:'paused'});
        }else{
          this.setState({ playState: 'playing',
                          duration: this.sound.getDuration()});
          this.sound.play(this.playComplete);
        }
      });    
    }
  }
  playComplete = (success) => {
    if(this.sound){
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
      this.setState({playState:'paused', playSeconds:0});
      this.sound.setCurrentTime(0);
    }
  }
  pause = () => {
    if(this.sound){
      this.sound.pause();
    }
    this.setState({playState:'paused'});
  }
  audio = () => {
    if(this.sound){
      this.sound.setVolume(1.0);
    }
    this.setState({volumeState:'audio'});
  }
  mute = () => {
    if(this.sound){
      this.sound.setVolume(0);
    }
    this.setState({volumeState:'mute'});
  }
  getAudioTimeString(seconds){
    const m = parseInt(seconds%(60*60)/60);
    const s = parseInt(seconds%60);
    return (m + ':' + (s<10?'0'+s:s));
  }
  render() {
    const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
    const durationString = this.getAudioTimeString(this.state.duration);
    return (
      <View style={{backgroundColor: '#444',
                    width: 350,
                    alignSelf:'center',
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
        <View>
          {this.state.playState == 'playing' && 
          <TouchableOpacity onPress={this.pause}
                            style={{marginHorizontal:15}}>
            <Image  source={img_pause}
                    style={{width:35,
                            height:35}}/>
          </TouchableOpacity>}
          {this.state.playState == 'paused' && 
          <TouchableOpacity onPress={this.play}
                            style={{marginHorizontal:15}}>
            <Image  source={img_play}
                    style={{width:35,
                            height:35}}/>
          </TouchableOpacity>}
        </View>
        <Slider onTouchStart={this.onSliderEditStart}
                onTouchEnd={this.onSliderEditEnd}
                onValueChange={this.onSliderEditing}
                value={this.state.playSeconds}
                maximumValue={this.state.duration}
                maximumTrackTintColor='white'
                minimumTrackTintColor='#00B6F0'
                thumbTintColor='white'
                style={{width:110}}
        />
        <Text style={{fontSize:20,
                      color:'white',
                      width:110}}>
          {currentTimeString + ' / ' + durationString}
        </Text>
        <View>
          {this.state.volumeState == 'audio' && 
          <TouchableOpacity onPress={this.mute}
                            style={{marginHorizontal:15}}>
            <Image  source={img_audio}
                    style={{width:30,
                            height:30}}/>
          </TouchableOpacity>}
          {this.state.volumeState == 'mute' && 
          <TouchableOpacity onPress={this.audio}
                            style={{marginHorizontal:15}}>
            <Image  source={img_mute}
                    style={{width:30,
                            height:30}}/>
          </TouchableOpacity>}
        </View>
      </View>
    );
  }
}