

export default function MyHeader() {
 
  const title = 'Liste de voitures';
  const sub_title = 'Mes voitures préférées :';
  
  return (
    <header style={{ marginBottom: '2rem' }}>
      <h1 style={{ margin: 0, color: '#4bbfecff' }}>{title}</h1>
      <h2 style={{ margin: 0, color: '#fff' }}>{sub_title}</h2>
    </header>
  );
}