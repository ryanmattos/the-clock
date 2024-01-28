import { Text, View, StyleSheet } from 'react-native'

export default function Title() {
    return (
        <View style={style.container}>
            <Text style={{ ...style.root, ...style._0}}>the</Text>
            <Text style={{ ...style.root, ...style._1}}>Clock</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        width: 'auto',
        flexDirection: 'row',
        height: 32,
    },
    root: {
        fontSize: 24
    },
    _0: {
        fontFamily: "Inter_400Regular",
    },
    _1: {
        fontFamily: "Inter_700Bold",
    },
    light: {
        color: "#000",
    },
    dark: {
        color: "#fff"
    }
})