import { CSSProperties } from "react";

interface Props {
    name: string,
    lastName: string
}

const favoriteGames = ['Elden Ring', 'Fifa', 'Call of Duty']
const isActive = true;

const address = {
    country: 'Argentina',
    province: 'Buenos Aires',
    city: 'CABA'
}

const {country, province, city} = address

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}

export function MyAwesomeApp({ name, lastName}: Props) {

    return(
        <>
            <h1 style={myStyles}>{name}</h1>
            <h3>{lastName}</h3>
            <p>Mis juegos favoritos son: {favoriteGames.join(', ')}</p>
            <p>{isActive ? 'Estoy activo' : 'Estoy inactivo'}</p>
            <p>{country}</p>
            <p>{province}</p>
            <p>{city}</p>
        </>
    )
}