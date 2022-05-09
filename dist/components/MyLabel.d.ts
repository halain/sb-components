/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * The label text
     */
    label: string;
    /**
     * The label size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * If the label should be all caps
     */
    allCaps?: boolean;
    /**
     * The label color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * The label custom font color
     */
    fontColor?: string;
    /**
     * The label background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
