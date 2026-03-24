export async function searchGames(query) {
  if (!query) return [];
  const res = await fetch(`https://bgg-json.azurewebsites.net/search?query=${query}`);
  return await res.json();
}