import { Punch } from "@/@types";
import { ActionReducer } from "@/enums/ActionType";

type PunchAction = {
    type: ActionReducer,
    payload: Punch
}

export const punchesReducer = (punches: Array<Punch>, action: PunchAction) => {
    switch (action.type) {
        case ActionReducer.ADDED: {
            return [ ...punches, action.payload ]
        }

        default: throw Error(`Unknown action: ${action.type}!`);

    }
}