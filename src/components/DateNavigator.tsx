import { View, Text,StyleSheet, Pressable } from 'react-native'
import { addDays, format, subDays } from 'date-fns'
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { DateNavigatorDetails } from '@/@types';

export type DateNavigatorProps = {
    onDateChange: (date: Date) => void
}

type Props = DateNavigatorProps

export default function DateNavigator({ onDateChange }: Props): React.JSX.Element {
    const [ viewDate, setViewDate ] = useState<Date>(new Date())
    const [ details, setDetails ] = useState<DateNavigatorDetails>()
    
    function handlePrevDate() {
        setViewDate( subDays(viewDate, 1) )
    }

    function handleNextDate() {
        setViewDate( addDays(viewDate, 1) )
    }

    useEffect(() => {
        const formattedDate = format(viewDate, 'd MMM. u').toLowerCase()
        const [ day, month, year ] = formattedDate.split(' ')

        setDetails({ day, month, year})
        onDateChange(viewDate)
    }, [viewDate])

    return (
        <View style={_.container}>
            <Pressable style={_.button} onPress={handlePrevDate}>
                <Feather name='chevron-left' size={24}/>
            </Pressable>
            { details && <View style={_.dateInfo}>
                <View style={_.left}>
                    <Text style={[_.text, _.textBold]}>{ details.day }</Text>
                    <Text style={[_.text, _.textRegular, _.dayOfMonth]}>de { details.month }</Text>
                </View>
                <View>
                    <Text style={[_.text, _.textBold]}>{ details.year }</Text>
                </View>
            </View> }
            <Pressable style={_.button} onPress={handleNextDate}>
                <Feather name='chevron-right' size={24}/>
            </Pressable>
        </View>
    );
}

const _ = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 32,
        // paddingTop: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56
    },
    dateInfo: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
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