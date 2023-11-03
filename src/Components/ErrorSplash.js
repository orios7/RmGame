import {Image, Text, View} from "react-native";

const errorImages = [
    '../assets/error1.png',
    '../assets/error2.png',
    '../assets/error3.png',
    '../assets/error4.png',
    '../assets/error5.png'
]

const randomErrorImage = errorImages[Math.floor((Math.random()) * errorImages.length)]
export const ErrorSplash = ({ errorMessage }) => {
    return (
        <View>
            <Image source={{uri: randomErrorImage }} style={styles.errorImage} />
            <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorImages: {

    },
    errorText: {

    },
})