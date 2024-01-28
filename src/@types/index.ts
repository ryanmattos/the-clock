export type Clock = {
    date: Date;
    timeStr: string;
    title: string;
    description: string | null;
}

export type Report = {
    createdAt: Date;
    exportedAt: Date;
    punches: Array<Clock>;
    analytics: ReportAnalytics;
}

export type ReportAnalytics = {
    extras: string;
}