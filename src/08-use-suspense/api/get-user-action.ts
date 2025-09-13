export interface User {
  id: number,
  name: string,
  location: string,
  role: string,
}

export const getUserAction = async (id: number) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return {
    id: id,
    name: 'Alonso Anchante',
    location: 'Pisco, Perú',
    role: 'Developer',
  } as User
}