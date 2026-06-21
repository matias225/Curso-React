import type { CSSProperties } from "react";

const firstName = 'Matias';
const lastName = 'Romani';

const favoriteGames = ['Elden Ring', 'Bloodborne', 'Sekiro', 'Metal Gear'];
const isActive = false;
const address = {
  Country: 'Argentina',
  Zipcode: 5600,
};

const myStyles: CSSProperties = {
  backgroundColor: 'blue',
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
}

export function MyAwesomeApp() {

  return (
    <div data-testid='div-app'>
      <h1 data-testid='first-name-title'>{firstName}</h1>
      <h3>{lastName}</h3>

      <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p
        style={myStyles}
      >
        {JSON.stringify(address)}
      </p>
    </div>
  );
};