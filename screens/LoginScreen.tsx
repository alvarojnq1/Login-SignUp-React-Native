import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.imagetop} source={require('../assets/images/background.png')} />

      {/* lights */}
      <View style={styles.lightview}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          style={styles.light1}
          source={require('../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
          style={styles.light2}
          source={require('../assets/images/light.png')}
        />
      </View>

      {/* title and form */}
      <View style={styles.containerTitleAndForm}>
        {/* title */}
        <View style={styles.innerContainerTitleAndForm}>
          <Text style={styles.textTitle}>Login</Text>
        </View>
      </View>

      {/*form */}
      <View style={styles.formsContainer}>
        <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.forms}>
          <TextInput placeholder="Email" placeholderTextColor={'gray'} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(1000).delay(200).springify()}
          style={styles.forms}>
          <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(1000).delay(400).springify()}
          style={styles.viewButton}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => alert('Bem vindo!')}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(1000).delay(600).springify()}
          style={styles.signup}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={styles.signupTxt}>SignUp</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
