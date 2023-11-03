import {StyleSheet, View, Text, Image} from 'react-native';
export const Character = ({Data}) => {{

    return(
        <View style={styles.View}>
            <Image source={{uri: Data.image}} style={styles.characterImage} />

            <Text style={styles.name}>{Data.name}</Text>
            <Text style={styles.species}>Species: {Data.species}</Text>
            <Text style={styles.gender}>Gender: {Data.gender}</Text>
            <Text style={styles.status}>Status: {Data.status}</Text>

            {/*// Render bio if one has been written for this character*/}
            {/*{Data.bio.length > 0 &&*/}
            {/*    // TODO: Add Bio Information thingy.*/}
            {/*<Text style={styles.bio}>Bio Information</Text>*/}
            {/*}*/}

        </View>
    );
}};

const styles = StyleSheet.create({
    View: {
        flexDirection:'column'
    },
    characterImage: {
        width: '100%',
        aspectRatio: 16/9,
        flexShrink: 0,
        flexGrow: 1,
        height: "auto"
    },
    name: {
        fontFamily: 'GetSchwifty',
        color: '#88e23b',
        fontSize: 50,
        alignSelf: "center",

    }
})