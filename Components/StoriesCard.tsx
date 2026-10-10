import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
type Props = {
    image: ImageSourcePropType;
    name: string;
    };

const StoriesCard = ({ image, name }: Props) => {
    return (
        <View style={styles.card}>
         <Image source={ image } style={styles.image} />
         
         <View style={styles.info}>
         <Text style={styles.name}>{name}</Text>
         </View>
         
        </View>
    );
};

export default StoriesCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        backgroundColor: "#2a2b40",
        padding: 14,
        margin: 14
    },

    image: {
        width: "100%",
        height: 500,
        borderRadius: 10,
        backgroundColor: "#E5E7EB",
    },

    info: { flex: 1 },
    name: { fontSize: 17, fontWeight: "bold", color: "#ffffff" },
    
});