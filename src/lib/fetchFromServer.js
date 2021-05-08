import serverBase from './serverBase';
async function fetchFromServer(route) {
  const response = await fetch(`${serverBase}${route}?nocache=${Math.floor(Math.random() * 1000000000)}`); // add query param to remove caching of routes
  const json = await response.json();
  return json;
}
export default fetchFromServer;
