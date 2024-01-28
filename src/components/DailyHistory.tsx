import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Clock } from '@/@types'
import { CountdownCircleTimer, useCountdown } from 'react-native-countdown-circle-timer'

export default function DailyHistory() {
    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
      } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })
      
    const [punches, setPunches] = useState<Array<Partial<Clock>>>([
        { type: 'in', title: 'Ponto #1', timeStr: '09:00' },
        { type: 'out', title: 'Ponto #2', timeStr: '11:56' },
        { type: 'in', title: 'Ponto #3', timeStr: '12:59' },
        { type: 'out', title: 'Ponto #4', description: 'fui comprar cigarro', timeStr: '14:12' },
        { type: 'in', title: 'Ponto #5', timeStr: '14:22' },
        { type: 'out', title: 'Ponto #6', timeStr: '18:10' },
    ])

    return (
        <View style={_.container}>
            <Text style={_.title}>Pontos do dia</Text>
            <View>
                {
                    punches.map((punch) => (
                        <View style={_.item}>
                            <View style={_.itemLeft}>
                                { punch.type === 'in' && <FontAwesome5 name="arrow-circle-right" size={16} color="green"/> }
                                { punch.type === 'out' && <FontAwesome5 name="arrow-circle-left" size={16} color="red" /> }
                                <Text style={_.itemTitle}>{ punch.description ?? punch.title }</Text>
                            </View>
                            <Text style={_.itemTime}>{ punch.timeStr }</Text>
                        </View>
                    ))
                }
            </View>
            <CountdownCircleTimer
                isPlaying
                duration={7}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
        </View>
    )
}


const _ = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'flex-start',
        marginTop: 16,
        paddingHorizontal: 16
    },
    title: {
        fontFamily: "Poppins_700Bold",
        fontSize: 24,
        marginBottom: 8
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        marginLeft: 8,
        fontSize: 16,
    },
    itemTime: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
        color: 'gray'
    }
})