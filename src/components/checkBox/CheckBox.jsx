import React from 'react'

import { Checkbox } from '../../commons/styles/Style'

export default function CheckBox(props) {

    return (
        props.isDeleted === true ?
            <Checkbox defaultChecked={true} type="checkbox" /> : 
            <Checkbox type="checkbox" />
    )
}
