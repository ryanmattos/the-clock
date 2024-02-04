import { Punch, PunchAdd } from "@/@types"
import { format } from "date-fns"
import { Button } from 'react-native'

export type PunchTheClockProps = {
    addPunchFn: (punch: PunchAdd) => void
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
    }

    return (
        <>
            <Button title="Punch the Clock!" onPress={handlePress}></Button>
        </>
    )
}