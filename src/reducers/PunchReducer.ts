import { Punch, PunchAdd } from "@/@types";
import { ActionReducer } from "@/enums/ActionType";
import { isEven } from "@/utils";
import Toast from "react-native-toast-message";

type PunchAction = {
    type: ActionReducer,
    payload: PunchAdd
}

export const punchesReducer = (punches: Array<Punch>, action: PunchAction) => {
    switch (action.type) {
        case ActionReducer.ADDED: {
            const { payload } = action

            const punch: Punch = {
                date: payload.date,
                isModified: payload.isModified,
                description: payload.description,
                timeStr: payload.timeStr,
                type: isEven(punches.length) ? 'in' : 'out',
                title: `Ponto #${punches.length + 1}`
            }

            Toast.show({
                type: 'success',
                text1: `Ponto #${punches.length + 1} socado com sucesso!`,
            })

            return [ ...punches, punch ]
        }

        default: throw Error(`Unknown action: ${action.type}!`);

    }
}