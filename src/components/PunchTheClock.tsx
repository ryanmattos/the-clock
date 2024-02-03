import { Punch } from "@/@types"
import { format } from "date-fns"
import { Button } from 'react-native'
import Toast from "react-native-toast-message"

export type PunchTheClockProps = {
    addPunchFn: (punch: Partial<Punch>) => void
}

type Props = PunchTheClockProps

export default function PunchTheClock({ addPunchFn }: Props): React.JSX.Element {

    const handlePress = () => {

        const now = new Date()

        addPunchFn({
            date: now,
            isModified: false,
            timeStr: format(now, 'HH:mm')
        })

        Toast.show({
            type: 'success',
            text1: 'Relógio socado com sucesso!',
        })
    }

    return (
        <>
            <Button title="Punch the Clock!" onPress={handlePress}></Button>
        </>
    )
}