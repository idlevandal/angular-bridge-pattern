export interface Widget {
    load: () => void;
    refresh: () => void;
    title: string;
}