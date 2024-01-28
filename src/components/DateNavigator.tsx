import { View, Text,StyleSheet } from 'react-native'
import { format } from 'date-fns'

export default function DateNavigator() {
    const today = new Date();

    const formattedDate = format(today, 'd MMM. u').toLowerCase()
    const [ day, month, year ] = formattedDate.split(' ')

    return (
        <View style={_.container}>
            <View style={_.left}>
                <Text style={[_.text, _.textBold]}>{ day }</Text>
                <Text style={[_.text, _.textRegular, _.dayOfMonth]}>de { month }</Text>
            </View>
            <View>
                <Text style={[_.text, _.textBold]}>{ year }</Text>
            </View>
        </View>
    );
}

const _ = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingTop: 16
    },
    left: {
        // width: '50%',
        flexDirection: 'row'
    },
    dayOfMonth: {
        left: 8
    },
    text: {
        color: '#000',
        fontSize: 24
    },
    textBold: {
        fontFamily: "Poppins_700Bold"
    },
    textRegular: {
        fontFamily: "Poppins_400Regular"
    }
})