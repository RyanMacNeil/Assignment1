import { Alert, FlatList, StyleSheet, View, Text, Image, Pressable } from "react-native";
import StoriesCard from "../Components/StoriesCard";
import LogosCard from "../Components/LogosCard";
import ScoreCard from "../Components/ScoreCard";


const Stories = [
  { id: "1", image: require("../assets/images/Stamkos.jpg"), name: "Stamkos passes Sakic, Iginla on all-time goals list" },
  { id: "2", image: require("../assets/images/Yankees.jpg"), name: "Yankees facing prospect of 17th season without World Series title" },
  { id: "3", image: require("../assets/images/Larkin.jpg"), name: "Larkin makes season debut vs. Senators despite trade request" },
  { id: "4", image: require("../assets/images/Laine.jpg"), name: "Report: Flames, Red Wings considering signing Laine" },
  { id: "5", image: require("../assets/images/Ohtani.jpg"), name: "Dodgers move struggling Ohtani to No. 5 spot for Game 3" },
];

const Logos = [
{ id: "l1", name: "ADD", image: require("../assets/images/plus.png") },
{ id: "l2", name: "PIT", image: require("../assets/images/penguins.png") },
{ id: "l3", name: "TOR", image: require("../assets/images/BlueJays.png") },
{ id: "l4", name: "IND", image: require("../assets/images/Colts.png") },
{ id: "l5", name: "TOR", image: require("../assets/images/Raptors.png") },
{ id: "l6", name: "MSU", image: require("../assets/images/Spartans.png") },
{ id: "l7", name: "WTA", image: require("../assets/images/WTA.webp") },
{ id: "l8", name: "ATP", image: require("../assets/images/ATP.png") },
{ id: "l9", name: "MMA", image: require("../assets/images/MMA.png") },
];

const Scores = [
{ id: "s1", home: "WSH", away: "PIT", time: "5:30 pm", date: "Oct 7" },
{ id: "s2", home: "CBJ", away: "PIT", time: "5:00 pm", date: "Oct 9" },
{ id: "s3", home: "TOR", away: "LAC", time: "4:30 pm", date: "Oct 10" },
{ id: "s4", home: "PIT", away: "DAL", time: "5:00 pm", date: "Oct 10" },
{ id: "s5", home: "PIT", away: "IND", time: "11:30 am", date: "Oct 11" },
{ id: "s6", home: "TOR", away: "NYK", time: "5:00 pm", date: "Oct 13" },
{ id: "s7", home: "CHI", away: "PIT", time: "6:00 pm", date: "Oct 13" },
{ id: "s8", home: "NYK", away: "TOR", time: "5:30 pm", date: "Oct 15" },
];



const Header = () => {
  return (
    <View>
      <View style={styles.header}>

        <View style={styles.headerContainer}>
        
          <Text style={styles.shopName}>The Score</Text>

          <View style={styles.imageContainer}>

            <Image 
              source={require("../assets/images/search.png")}
              style={styles.headerImage}
            />
            <Image 
              source={require("../assets/images/profile.png")}
              style={styles.headerImage}
            />
          </View>

        </View>

      </View>
        
        <FlatList
          data={Logos}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <LogosCard name={item.name} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.logoList}
          contentContainerStyle={styles.logoContent}
        />

          <FlatList
          data={Scores}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ScoreCard home={item.home} away={item.away} time={item.time} date={item.date}/>
          )}
          keyExtractor={(item) => item.id}
          style={styles.scoreList}
          contentContainerStyle={styles.scoreContent}
        />

    </View>
  );
};

const Index = () => {
  const handleAlert = () => {
    Alert.alert("Alert Button pressed");
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={Stories}
        renderItem={({ item }) => (
        <StoriesCard
          image={item.image}  
          name={item.name}
          
        />)}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />

    <Pressable 
        onPress={handleAlert} 
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
          {({ pressed }) => (
            <Text style={[styles.shopName, pressed && styles.pressed]}> 
              Alert 
            </Text>
          )}
    </Pressable>

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#2B2A40", padding: 12 },
  header: {
    backgroundColor: "#2B2A40",
    paddingHorizontal: 20,
    paddingVertical: 26,
    marginHorizontal: -12,
    marginTop: -12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#2B2A40',
  },
  headerImage: {
    width: 40,         
    height: 40,        
    borderRadius: 20,  
    marginRight: 12,    
  },
  imageContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  empty: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 16,
    marginTop: 40,
  },
  shopName: { color: "#ffffff", fontSize: 26, fontWeight: "bold" },
  shopSub: { color: "#BBF7D0", fontSize: 15, marginTop: 4 },
  separator: { height: 12 },
  listContent: { padding: 12, paddingBottom: 28 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "#6B7280",
    marginTop: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#9493a0",
    paddingVertical: 16,
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  pressed: {
    color:"#6991ff",
    opacity:0.9,
  },
  logoList: { height: 190, marginHorizontal: -12, marginVertical: 1},
  logoContent: { paddingHorizontal: 12, gap: 12 },
  scoreList: { height: 65, marginHorizontal: 5, marginBottom: 30 },
  scoreContent: { paddingHorizontal: 12, gap: 12 },
});
