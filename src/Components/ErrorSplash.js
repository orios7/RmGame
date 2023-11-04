import {StyleSheet, Image, Text, View, ImageBackground} from "react-native";
import Error1 from '../Assets/Error1.png';
import Error2 from '../Assets/Error2.png';
import Error3 from '../Assets/Error3.png';
import Error4 from '../Assets/Error4.png';
import Error5 from '../Assets/Error5.png';

export const ErrorSplash = ({ errorMessage }) => {
    const errorImages = [
        Error1,
        Error2,
        Error3,
        Error4,
        Error5
    ]

    const randomErrorImage = errorImages[Math.floor((Math.random()) * errorImages.length)]
    return (
        <View style={styles.container}>
            <ImageBackground source={randomErrorImage} style={styles.errorImage}/>
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorImage: {
        flex: 1,
    },
    errorContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
    },
})