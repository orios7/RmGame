import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';


export default function MainScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Assets/main.png')}
                resizeMode='cover'
                position='absolute'
                style={{ flex: 1 }}
            >
                <View style={styles.center}>
                    <Button
                        style={styles.button}
                        title="Profile"
                        onPress={() => navigation.navigate('User', { language: 'e' })}
                    />
                    <Button
                        style={styles.button}
                        title="Top 10"
                        onPress={() =>
                            navigation.navigate('Stats', { language: 'french' })
                        }
                    />
                    <Button
                        style={styles.button}
                        title="Trivia"
                        onPress={() =>
                            navigation.navigate('Trivia', { language: 'e' })
                        }
                    />
                    <Button
                        style={styles.button}
                        title="Character List"
                        onPress={() =>
                            navigation.navigate('Characters', {
                                language: 'french',
                            })
                        }
                    />
                    <Button
                        style={styles.button}
                        title="Log Out"
                        onPress={() =>
                            navigation.navigate('Second', { language: 'french' })
                        }
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBE480',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
    },
});