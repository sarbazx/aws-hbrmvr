console.log(import.meta.env.VITE_API_URL);
export async function fetchInitialNews() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/initial`, { mode: "cors" })
  return response.json();
}
