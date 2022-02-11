import React, {useState} from "react";

export const DataContext = React.createContext({});
export const AuthProvider = props => {
    const [feedBack, setFeedBack ] = useState(null)
    const property = [
        {
            id: 1,
            name: 'Agrotis1',
            cnpj: '04.909.987/0001-81'
        },

        {
            id: 2,
            name: 'Agrotis2',
            cnpj: '04.909.987/0001-82'
        },
        {
            id: 3,
            name: 'Agrotis3',
            cnpj: '04.909.987/0001-83'
        },
        {
            id: 4,
            name: 'Agrotis4',
            cnpj: '04.909.987/0001-84'
        },
        {
            id: 5,
            name: 'Agrotis5',
            cnpj: '04.909.987/0001-85'
        },
    ]
    const lab = [
        {
            id: 1,
            name: 'Agrotas',
        },
        {
            id: 2,
            name: 'Agrotes'
        },
        {
            id: 3,
            name: 'Agrotis'
        },
        {
            id: 4,
            name: 'Agrotos'
        },
        {
            id: 5,
            name: 'Agrotus'
        },
    ]



    return (
        <DataContext.Provider value={{ property, lab, feedBack, setFeedBack }}>
            {props.children}
        </DataContext.Provider>
    )
}

