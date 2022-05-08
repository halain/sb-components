// 1- Importar el componente
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel"


// 2- Crear una story
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: { type: 'select', options: ['normal', 'h1', 'h2', 'h3'] } },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>


// 3- Crear el template de la story
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />


// 4- Exportar las story
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Custom font color',
    size: 'h1',
    fontColor: '#5517ac'
}