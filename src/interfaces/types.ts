export interface UsageItem {
    calculation: string;
    totalDollars: string;
}

export interface CursorStats {
    currentMonth: {
        month: number;
        year: number;
        usageBasedPricing: UsageItem[];
    };
    lastMonth: {
        month: number;
        year: number;
        usageBasedPricing: UsageItem[];
    };
    premiumRequests: {
        current: number;
        limit: number;
        startOfMonth: string;
    };
}

export interface SQLiteRow {
    value: string;
}

export interface SQLiteError extends Error {
    code?: string;
    errno?: number;
}

export interface AxiosErrorData {
    status?: number;
    data?: any;
    message?: string;
}

export interface ExtendedAxiosError {
    response?: AxiosErrorData;
    message: string;
}

export interface ComposerData {
    conversation: Array<{
        timingInfo?: {
            clientStartTime: number;
            [key: string]: any;
        };
        [key: string]: any;
    }>;
}

export interface TimingInfo {
    key: string;
    timestamp: number;
    timingInfo: {
        clientStartTime: number;
        [key: string]: any;
    };
}

export interface UsageLimitResponse {
    hardLimit?: number;
    noUsageBasedAllowed?: boolean;
}

export interface GitHubRelease {
    tag_name: string;
    name: string;
    prerelease: boolean;
    published_at: string;
    html_url: string;
    body: string;
}

export interface ReleaseCheckResult {
    hasUpdate: boolean;
    currentVersion: string;
    latestVersion: string;
    isPrerelease: boolean;
    releaseUrl: string;
    releaseNotes: string;
}

export interface CursorUsageResponse {
    'gpt-4': {
        numRequests: number;
        numRequestsTotal: number;
        numTokens: number;
        maxRequestUsage: number;
        maxTokenUsage: number | null;
    };
    'gpt-3.5-turbo': {
        numRequests: number;
        numRequestsTotal: number;
        numTokens: number;
        maxRequestUsage: number | null;
        maxTokenUsage: number | null;
    };
    'gpt-4-32k': {
        numRequests: number;
        numRequestsTotal: number;
        numTokens: number;
        maxRequestUsage: number | null;
        maxTokenUsage: number | null;
    };
    startOfMonth: string;
} 