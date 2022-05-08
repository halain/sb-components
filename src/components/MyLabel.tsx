import './mylabel.css';

 interface MyLabelProps {
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
    
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No label',
    size= 'normal',
    fontColor
}: MyLabelProps) => {

   
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}} >
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}