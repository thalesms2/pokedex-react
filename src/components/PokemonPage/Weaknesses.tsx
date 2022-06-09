import React, { useEffect, useState } from 'react'
import Type from '../Type'

interface WeaknessesProps {
    info: any
}

const Weaknesses: React.FC<WeaknessesProps> = (props) => {
    const [weak, setWeak] = useState<string[]>([])
    useEffect(() => {
        props.info.map((relation: any) => {
            relation.double_damage_from.map((type: any) => {
                setWeak((prev) => [...prev, type.name])
            })
        })
    }, [props.info])
    
    return (
        <div>
            {weak.map((type: string) => {
                return <Type key={`${type}Weak`} type={type}  big />
            })}
        </div>
    )
}

export default Weaknesses