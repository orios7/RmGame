import {StyleSheet, View, Text, Image} from 'react-native';
export const Character = ({Data}) => {{

    return(
        <View style={styles.View}>
            <Image source={{uri: Data.image}} style={styles.characterImage} />

            <View style={styles.textContainer}>
            <Text style={styles.name}>{Data.name}</Text>
            <Text style={styles.species}>Species: {Data.species}</Text>
            <Text style={styles.gender}>Gender: {Data.gender}</Text>
            <Text style={styles.status}>Status: {Data.status}</Text>
            </View>

        </View>
    );
}};

const styles = StyleSheet.create({
    View: {
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    characterImage: {
        width: 'auto',
        aspectRatio: 3/4,
        flexShrink: 0,
        flexGrow: 1,
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    name: {
        fontFamily: 'GetSchwifty',
        color: '#88e23b',
        fontSize: 40,
        alignSelf: 'center',
        marginBottom: 10,
    },
    textContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    details: {
        fontSize: 16,
        color: '#333',
    },
    detailLine: {
        marginBottom: 5,
    },
    bio: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});