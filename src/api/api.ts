export async function fetchInitialNews() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/initial`, { mode: "cors" })
  return response.json();
}

export async function fetchRecommendedNews(title: any) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/recommended`, {
    mode: "cors", method: 'POST',
    body: JSON.stringify({ title: title }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.json();
}

export async function fetchNewsById(id: any) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { mode: "cors" })
  return response.json();
}




export const apiUrl = import.meta.env.VITE_API_URL;