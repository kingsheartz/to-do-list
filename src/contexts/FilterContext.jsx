import React from 'react'

const FilterContext = React.createContext({
    filter: [], 
    setFilter: () => {},
    group: [], 
    setGroup: () => {}
})


export default  FilterContext
