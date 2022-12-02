import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';


export default function Channels() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to our Channels</Text>

      <View style={styles.mainImageContainer}>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>BIBLE STUDY</Text>
          </View>

        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently2.jpg')} style={{ height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5}} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently4.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>KOINONIA</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CHOIR</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>FIRE HOUR</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CAMPUS CONGRESS</Text>
          </View>
        </View>
      
      </View>






      <Text style={styles.header}>POADCASTS</Text>

<View style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently1.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>BIBLE STUDY</Text>
    </View>

  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently2.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
    </View>
  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently4.jpg')} style={{  height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>KOINONIA</Text>
    </View>
  </View>
  

</View>





<Text style={styles.header}>GS MESSAGES</Text>

<View style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently1.jpg')} style={{   height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.gsbadgeContainer}>
      <Text style={styles.badgeText}>BIBLE STUDY</Text>
    </View>

  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently2.jpg')} style={{   height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.gsbadgeContainer}>
      <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
    </View>
  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently4.jpg')} style={{   height: 109, width: 100, borderTopLeftRadius:5, borderTopRightRadius:5 }} />
    <View style={styles.gsbadgeContainer}>
      <Text style={styles.badgeText}>KOINONIA</Text>
    </View>
  </View>
  
</View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingHorizontal:15

  },
  header: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 20
  },

  mainImageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",


  },
  imagecontainer: {
    backgroundColor: "#fff",
    marginHorizontal: 5,
    marginVertical: 20,
    padding: 0

  },
  badgeContainer: {
    width: 100,
    height:24,
    left:0,
    backgroundColor: "#0174DF",
    justifyContent: "center",
    alignItems: "center",

  },

  badgeText: {
    fontSize: 10,
    lineHeight:12,
    color: "#fff",
    fontWeight: "700"

  },
  gsbadgeContainer: {
    backgroundColor: "#FF0000",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",

  },


});
