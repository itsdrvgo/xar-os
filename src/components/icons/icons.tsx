import {
    AlarmClock,
    AlertTriangle,
    ArrowBigDown,
    ArrowBigUp,
    ArrowRight,
    Asterisk,
    BarChart,
    BarChart2,
    BatteryCharging,
    Bold,
    BookMarked,
    BookOpenCheck,
    Cake,
    Check,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Code,
    Command,
    Component,
    Construction,
    CreditCard,
    DollarSign,
    Eye,
    EyeOff,
    Facebook,
    File,
    FileCode2,
    FileQuestion,
    FileText,
    Fingerprint,
    Gem,
    Gift,
    Github,
    Globe,
    Hand,
    Hash,
    Heart,
    HelpCircle,
    Image,
    Info,
    Instagram,
    Italic,
    Landmark,
    Laptop,
    Layers,
    LayoutDashboard,
    LifeBuoy,
    List,
    Loader2,
    Lock,
    LogIn,
    LogOut,
    LucideLoader2,
    LucideProps,
    MapPin,
    Medal,
    MessageSquare,
    Moon,
    MoreVertical,
    Music4,
    PartyPopper,
    Pencil,
    Pizza,
    Plus,
    Power,
    RefreshCw,
    RotateCcw,
    Send,
    Settings,
    Share2,
    Shield,
    Sparkles,
    SunMedium,
    ThumbsUp,
    Ticket,
    Trash,
    Trophy,
    Twitter,
    Underline,
    User,
    Users,
    Verified,
    Vote,
    X,
    Youtube,
    Zap,
    type IconNode as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
    gem: Gem,
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    users: Users,
    zap: Zap,
    component: Component,
    thumbsup: ThumbsUp,
    shield: Shield,
    bookopencheck: BookOpenCheck,
    filequestion: FileQuestion,
    checkcircle: CheckCircle,
    lock: Lock,
    party: PartyPopper,
    medal: Medal,
    barChart: BarChart2,
    youtube: Youtube,
    twitter: Twitter,
    check: Check,
    instagram: Instagram,
    github: Github,
    dashboard: LayoutDashboard,
    hand: Hand,
    ticket: Ticket,
    vote: Vote,
    embed: FileCode2,
    alarm: AlarmClock,
    gift: Gift,
    trophy: Trophy,
    cake: Cake,
    bank: Landmark,
    application: BookMarked,
    support: LifeBuoy,
    verified: Verified,
    command: Command,
    left: ChevronLeft,
    hash: Hash,
    info: Info,
    pencil: Pencil,
    send: Send,
    moreVert: MoreVertical,
    loader: LucideLoader2,
    refresh: RefreshCw,
    arrowUp: ArrowBigUp,
    arrowDown: ArrowBigDown,
    bold: Bold,
    italic: Italic,
    underline: Underline,
    location: MapPin,
    dollar: DollarSign,
    sparkles: Sparkles,
    fingerprint: Fingerprint,
    asterisk: Asterisk,
    facebook: Facebook,
    music: Music4,
    login: LogIn,
    view: Eye,
    hide: EyeOff,
    logout: LogOut,
    list: List,
    construction: Construction,
    document: FileText,
    globe: Globe,
    heart: Heart,
    comment: MessageSquare,
    analytics: BarChart,
    share: Share2,
    layers: Layers,
    code: Code,
    power: Power,
    batteryCharging: BatteryCharging,
    restart: RotateCcw,
    actionbar: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 351 348"
            data-icon="action-bar"
            role="img"
            width="13"
            height="13"
        >
            <path
                stroke="currentColor"
                d="M87.75 46.2c9.31 0 18.237 3.245 24.819 9.021 6.583 5.776 10.281 13.61 10.281 21.779s-3.698 16.003-10.281 21.779c-6.582 5.776-15.51 9.021-24.819 9.021-9.31 0-18.237-3.245-24.82-9.021C56.349 93.003 52.65 85.169 52.65 77s3.698-16.003 10.28-21.779c6.583-5.776 15.51-9.021 24.82-9.021zM263.25 0c23.273 0 45.592 8.112 62.049 22.553C341.755 36.993 351 56.578 351 77c0 20.422-9.245 40.007-25.701 54.447C308.842 145.888 286.523 154 263.25 154H87.75c-23.273 0-45.592-8.112-62.049-22.553C9.245 117.007 0 97.422 0 77c0-20.422 9.245-40.007 25.701-54.447C42.158 8.113 64.477 0 87.75 0h175.5zM87.75 30.8c-13.964 0-27.355 4.867-37.23 13.532C40.648 52.996 35.1 64.747 35.1 77s5.547 24.004 15.42 32.668c9.875 8.665 23.266 13.532 37.23 13.532h175.5c13.964 0 27.355-4.867 37.229-13.532C310.353 101.004 315.9 89.253 315.9 77s-5.547-24.004-15.421-32.668C290.605 35.667 277.214 30.8 263.25 30.8H87.75zM263.25 194H87.75c-23.273 0-45.592 8.112-62.049 22.553C9.245 230.993 0 250.578 0 271c0 20.422 9.245 40.007 25.701 54.447C42.158 339.888 64.477 348 87.75 348h175.5c23.273 0 45.592-8.112 62.049-22.553C341.755 311.007 351 291.422 351 271c0-20.422-9.245-40.007-25.701-54.447C308.842 202.112 286.523 194 263.25 194v0zm0 123.2c-13.964 0-27.355-4.867-37.229-13.532-9.874-8.664-15.421-20.415-15.421-32.668s5.547-24.004 15.421-32.668c9.874-8.665 23.265-13.532 37.229-13.532 13.964 0 27.355 4.867 37.229 13.532 9.874 8.664 15.421 20.415 15.421 32.668s-5.547 24.004-15.421 32.668c-9.874 8.665-23.265 13.532-37.229 13.532z"
            />
        </svg>
    ),
    discord: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="discord"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-discord"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
        </svg>
    ),
    google: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="discord"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    ),
    apple: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
        </svg>
    ),
    vercel: ({ ...props }: LucideProps) => (
        <svg aria-label="Vercel logotype" role="img" viewBox="0 0 283 64">
            <path
                d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                fill="white"
            ></path>
        </svg>
    ),
};
