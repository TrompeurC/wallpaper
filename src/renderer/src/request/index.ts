export const fetchUrl = async (url:string) => {
  const res = await fetch(url);
  return await res.text()
}
