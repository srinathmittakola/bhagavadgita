const API_BASE = "https://vedicscriptures.github.io";

export async function fetchChapters() {
  try {
    const res = await fetch(`${API_BASE}/chapters`);
    if (!res.ok) throw new Error("Failed to fetch chapters");
    return res.json();
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
}

export async function fetchChapter(chapter) {
  try {
    const res = await fetch(`${API_BASE}/chapter/${chapter}`);
    if (!res.ok) throw new Error(`Failed to fetch chapter ${chapter}`);
    return res.json();
  } catch (error) {
    console.error(`Error fetching chapter ${chapter}:`, error);
    throw error;
  }
}


export async function fetchVerse(chapter, verse) {
  try {
    const res = await fetch(`${API_BASE}/slok/${chapter}/${verse}`);
    if (!res.ok) throw new Error(`Failed to fetch verse ${chapter}:${verse}`);
    return res.json();
  } catch (error) {
    console.error(`Error fetching verse ${chapter}:${verse}:`, error);
    throw error;
  }
}
