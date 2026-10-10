import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
    type Props = {
    name: string;
    image: ImageSourcePropType;
};

const LogosCard = ({ name, image }: Props) => {
    return (
        <View style={styles.card}>
            <Image source={ image } style={styles.image} />
            <Text style={styles.name} numberOfLines={2}>
                {name}
            </Text>
        </View>
    );
};

export default LogosCard;

const styles = StyleSheet.create({
    card: {
        width: 150,
        color: "#FFFFFF",
        backgroundColor: "#2B2A40",
        padding: 10,
    },

    image: {
        width: "100%",
        height: 130,
        backgroundColor: "#2B2A40",
    },

    name: { color: "#FFFFFF", fontSize: 14, fontWeight: "600", marginTop: 8, textAlign: "center" },
});