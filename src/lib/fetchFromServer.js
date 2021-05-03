import serverBase from './serverBase';
async function fetchFromServer(route) {
  const response = await fetch(`${serverBase}${route}`);
  const json = await response.json();
  return json;
}
export default fetchFromServer;
