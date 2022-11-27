import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';


export default function Channels() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to our Channels</Text>

      <View style={styles.mainImageContainer}>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>BIBLE STUDY</Text>
          </View>

        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently2.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently4.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>KOINONIA</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CHOIR</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>FIRE HOUR</Text>
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 110, }} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>CAMPUS CONGRESS</Text>
          </View>
        </View>
      
      </View>






      <Text style={styles.header}>POADCASTS</Text>

<View style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 100, width: 110, }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>BIBLE STUDY</Text>
    </View>

  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently2.jpg')} style={{ height: 100, width: 110, }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
    </View>
  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently4.jpg')} style={{ height: 100, width: 110, }} />
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>KOINONIA</Text>
    </View>
  </View>
  

</View>





<Text style={styles.header}>GS MESSAGES</Text>

<View style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 100, width: 110, }} />
    <View style={styles.gsbadgeContainer}>
      <Text style={styles.badgeText}>BIBLE STUDY</Text>
    </View>

  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently2.jpg')} style={{ height: 100, width: 110, }} />
    <View style={styles.gsbadgeContainer}>
      <Text style={styles.badgeText}>CAMPUS SERVICE</Text>
    </View>
  </View>
  <View style={styles.imagecontainer}>
    <Image source={require('../../assets/images/recently4.jpg')} style={{ height: 100, width: 110, }} />
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
    backgroundColor: '#fff',

  },
  header: {
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 18.29,
    marginTop: 20
  },

  mainImageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom:35


  },
  imagecontainer: {
    height: 100,
    width: 110,
    borderRadius: 5,
    backgroundColor: "blue",
    marginHorizontal: 5,
    marginVertical: 20,
    padding: 0

  },
  badgeContainer: {
    backgroundColor: "#0174DF",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",

  },

  badgeText: {
    fontSize: 14,
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
