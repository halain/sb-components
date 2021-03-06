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

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No label',
    size= 'normal',
    fontColor,
    backgroundColor
}: MyLabelProps) => {

   
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor, backgroundColor}} >
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}