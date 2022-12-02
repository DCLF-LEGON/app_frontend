import 'react-native-gesture-handler';

import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Details({ route, navigation }) {
  const { title, otherParam, pastorName, message } = route.params;
  return (

    <SafeAreaView style={styles.container2}>
      <View style={styles.header}>
        <Text>hello This is the header</Text>
      </View>

      <ScrollView style={styles.container}>

        <View style={styles.barnerContainer}>
          <Image style={{ resizeMode: "contain", height: 230, width: 200, borderRadius: 5, }} source={otherParam} />

        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.name}>{route.params.pastorName}</Text>
          <Text style={styles.message}>{route.params.message}</Text>
        </View>

        <View style={styles.iconsMainContainer}>
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>

              <FontAwesome name="bookmark" size={20} color="#fff" />
            </View>
            <Text style={styles.icontext}>Bookmark</Text>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <AntDesign name="like1" size={20} color="#fff" />
            </View>
            <Text style={styles.icontext}>Like</Text>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="note-edit-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.icontext}>Bookmark</Text>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="share-all" size={20} color="#fff" />
            </View>

            <Text style={styles.icontext}>Bookmark</Text>

          </View>
        </View>



      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25

  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0

  },
  header: {
    height: 50,
    backgroundColor: "blue",
    position: "relative",
    alignSelf: "center",
    width: "100%",

  },
  barnerContainer: {
    backgroundColor: "red",
    marginTop: 90,
  },
  detailsContainer: {
    position: "relative",
    marginBottom: 20,

  },
  title: {
    fontWeight: "700",

    fontSize: 15,
    marginTop: 20,
    color: "#000000",




  },
  name: {
    fontWeight: "400",
    fontSize: 10,
    color: "#000000",
    marginTop: 5,
    lineHeight: 10

  },
  message: {
    fontWeight: "400",
    fontSize: 12,
    marginTop: 25,
    lineHeight: 15

  },

  iconsMainContainer: {
    flex: 0.3,
    flexDirection: "row",

    justifyContent: "space-evenly",
    position: "relative"

  },

  iconsContainer: {
    alignItems: "center"
  },


  icons: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#0174DF"

  },

  icontext: {
    fontSize: 12,
    fontWeight: "400",
    color: "#0174DF",
    marginTop: 10

  }



});
