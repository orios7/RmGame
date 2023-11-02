import {View, Text, Image} from 'react-native';
import { useFonts } from 'expo-font;'

const Character = ({Data}) => {{
    const [loaded] = useFonts({
        Swifty: require('/src/Assets/fonts/get_schwifty.ttf')
    })

    if(!loaded) {
        return null;
    }

    return(
        <View>
            <Image source={{uri: Data.image}} style={styles.characterImage} />
            <Text style={styles.name}>{Data.name}</Text>
            <Text style={styles.species}>{Data.species}</Text>
            <Text style={styles.age}>{Data.age}</Text>
            <Text style={styles.status}>{Data.status}</Text>

            // Render bio if one has been written for this character
            {data.bio.length > 0 &&
                // TODO: Add Bio Information thingy.
            <Text style={styles.bio}>Bio Information</Text>
            }

        </View>
    );
}};

const styles = StyleSheet.create({
    name: {
        fontFamily: 'get_schwifty.ttf',
        fontSize: 27
    },
    characterImage: {
        width: '100%',
        aspectRatio: 16/9,
    }
})