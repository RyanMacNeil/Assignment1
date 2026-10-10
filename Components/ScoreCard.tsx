import { StyleSheet, Text, View } from "react-native";
    type Props = {
    home: string;
    away: string;
    time: string;
    date: string;
    
};

const ScoreCard = ({ home, away, time, date  }: Props) => {
    return (
        <View style={styles.card}>

            <view style={styles.teamsContainer}>

                <Text style={styles.name} numberOfLines={2}>
                    {away}
                </Text>
                <Text style={styles.name} numberOfLines={2}>
                    {home}
                </Text>

            </view>

            <view style={styles.dateTimeContainer}>

                <Text style={styles.name} numberOfLines={2}>
                    {time}
                </Text>
                <Text style={styles.name} numberOfLines={2}>
                    {date}
                </Text>

            </view>

        </View>
    );
};

export default ScoreCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',  
        width: 150,
        color: "#FFFFFF",
        backgroundColor: "#3b3a4f",
        paddingHorizontal: 10,
        
    },
    teamsContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dateTimeContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        },
   

    name: { color: "#FFFFFF", fontSize: 14, fontWeight: "600", textAlign: "center" },
});