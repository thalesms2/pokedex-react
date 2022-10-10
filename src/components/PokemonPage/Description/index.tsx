import useHandles from '../../../hooks/useHandles'
import {
    DescriptionWrapper,
    DescriptionText,
    LabelSelect,
    Select
} from './Description.styled'

interface DescriptionInfo {
    language: string;
    text: string;
    version: number;
    versionFixed: string;
}
interface DescriptionProps {
    info: DescriptionInfo[];
}

const Description = ({ info }: DescriptionProps) => {
    const {
        gameDescription,
        handleGameDescriptionChange
    } = useHandles()
    
    return (
        <DescriptionWrapper>
            <DescriptionText>
                { info[gameDescription].text }
            </DescriptionText>
            <LabelSelect>Version: </LabelSelect>
            <Select name="version" defaultValue={gameDescription} onChange={(e) => handleGameDescriptionChange(e.target.value)}>
                {info.map((ver: any) => {
                    return <option key={ver.versionFixed} value={ver.version}>{ver.versionFixed}</option>
                })}
            </Select>
        </DescriptionWrapper>
    )
}

export default Description