const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function fetchTMDBData(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results[0]; // get first match
}
