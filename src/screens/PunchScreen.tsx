import DailyHistory from "@/components/DailyHistory";
import DateNavigator from "@/components/DateNavigator";
import PunchTheClock from "@/components/PunchTheClock";
import { useReducer, useState } from "react";
import { Text } from 'react-native'
import { CountdownCircleTimer, useCountdown } from "react-native-countdown-circle-timer";
import { Punch } from "@/@types"
import { punchesReducer } from "@/reducers/PunchReducer";
import { ActionReducer } from "@/enums/ActionType";
import { isEven } from "@/utils";

export default function PunchScreen(): React.JSX.Element {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
      } = useCountdown({ isPlaying: isPlaying, duration: 50, colors: '#abc' })

    const [punches, dispatch] = useReducer(punchesReducer, initialPunches)

    function handleAddPunch(payload: Partial<Punch>) {
        setIsPlaying(!isPlaying)

        const punch: Punch = {
            date: payload.date!,
            isModified: payload.isModified!,
            description: payload.description,
            timeStr: payload.timeStr!,
            type: isEven(punches.length) ? 'in' : 'out',
            title: `Ponto #${punches.length + 1}`
        }

        console.log({
            type: ActionReducer.ADDED,
            payload: punch
        });
        
        dispatch({
            type: ActionReducer.ADDED,
            payload: punch
        })
    }

    function dateChange(date: Date) {
        console.log(date)
    }
      
    return ( 
        <>
            <DateNavigator onDateChange={dateChange}/>
            <DailyHistory punches={punches}/>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={28800}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {
                    ({ remainingTime }) => {
                        const hours = Math.floor(remainingTime / 3600)
                        const minutes = Math.floor((remainingTime % 3600) / 60)
                        const seconds = remainingTime % 60
                        
                        const fixTime = (v: number) => `${v}`.padStart(2, '0');

                        return <Text>{fixTime(hours)}:{fixTime(minutes)}:{fixTime(seconds)}</Text>
                      }
                }
            </CountdownCircleTimer>
            <PunchTheClock addPunchFn={handleAddPunch}/>
        </>
    )
}

const initialPunches: Array<Punch> = [
    // { type: 'in', title: 'Ponto #1', timeStr: '09:00', date: new Date(), isModified: false },
    // { type: 'out', title: 'Ponto #2', timeStr: '11:56', date: new Date(), isModified: false  },
    // { type: 'in', title: 'Ponto #3', timeStr: '12:59' },
    // { type: 'out', title: 'Ponto #4', description: 'fui comprar cigarro', timeStr: '14:12' },
    // { type: 'in', title: 'Ponto #5', timeStr: '14:22' },
    // { type: 'out', title: 'Ponto #6', timeStr: '18:10' },
]