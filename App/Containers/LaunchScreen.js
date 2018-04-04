import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Meteor, { createContainer } from 'react-native-meteor'
import Config from '../Config/AppConfig'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

Meteor.connect(Config.websocketServerUrl)

class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Websocket connect status: {this.props.meteorStatus}
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default createContainer(() => {
  const meteorStatus = Meteor.status()

  return {
    meteorStatus: meteorStatus.connected ? 'connected' : 'disconnected'
  }
}, LaunchScreen)
