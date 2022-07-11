import React from 'react'

const ListContext = React.createContext({
    list: [],
    setList: () => { },
    strikedList: [],
    setStrikedList: () => { }
})


export default ListContext