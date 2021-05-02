async function fetchFromServer(route) {
  const response = await fetch(`http://localhost:6001${route}`);
  const json = await response.json();
  return json;
}
export default fetchFromServer;
