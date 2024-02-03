import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Punch } from '@/@types'

export type DailyHistoryProps = {
    punches: Array<Punch> | Array<Partial<Punch>>
}

type Props = DailyHistoryProps

export default function DailyHistory({ punches }: Props): React.JSX.Element {
    return (
        <View style={_.container}>
            <Text style={_.title}>Pontos do dia</Text>
            <View>
                {   punches &&
                    punches.map((punch) => (
                        <View style={_.item} key={punch.title}>
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