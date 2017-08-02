import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import CardBrandImage from './cardBrandImage'

export default (props) => {
  if(props.selectedCard === props.paymentSource.last4){
  return <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>

    <View style={props.styles.cardTextContainer}>
      <CardBrandImage style={props.styles.cardBrandImage} brand={props.paymentSource.brand} />
      <Text style={props.styles.cardTextType}>{props.paymentSource.brand}</Text>
      <Text style={props.styles.cardTextEndingIn}>Ending in</Text>
      <Text style={props.styles.cardTextLast4}>{props.paymentSource.last4}</Text>
      <TouchableHighlight 
        underlayColor="transparent"
        activeOpacity={0.7}>
        <View style = {props.styles.default}>
          <Text style = {props.styles.defaultText}>default</Text>
        </View>
      </TouchableHighlight>
    </View>
  </TouchableOpacity>
  }
  else{
  return <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
    <View style={props.styles.cardTextContainer}>
      <CardBrandImage style={props.styles.cardBrandImage} brand={props.paymentSource.brand} />
      <Text style={props.styles.cardTextType}>{props.paymentSource.brand}</Text>
      <Text style={props.styles.cardTextEndingIn}>Ending in</Text>
      <Text style={props.styles.cardTextLast4}>{props.paymentSource.last4}</Text>
      <TouchableHighlight 
        underlayColor="transparent"
        activeOpacity={0.7}>
        <View style = {props.styles.noDefault}>
          <Text style = {props.styles.noDefaultText}>default</Text>
        </View>
      </TouchableHighlight>
    </View>
  </TouchableOpacity>
  }
}