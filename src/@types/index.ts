export type Punch = {
    date: Date;
    type: "in" | "out"
    timeStr: string;
    title: string;
    description?: string;
    isModified: boolean;
    lastModifiedAt?: Date;
    history?: Array<PunchHistory>
}

export type PunchHistory = {
    previousTimeStr: string;
    currentTimeStr: string;
    modifiedAt: Date;
}

export type Report = {
    createdAt: Date;
    exportedAt: Date;
    punches: Array<Punch>;
    analytics: ReportAnalytics;
}

export type ReportAnalytics = {
    extras: string;
}

export type DateNavigatorDetails = { day: string; month: string; year: string }