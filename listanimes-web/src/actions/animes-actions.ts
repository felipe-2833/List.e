const API_URL = "http://localhost:8080/animes"

export async function getAnimes() {
    const response = await fetch(API_URL)
    return await response.json()
}


export async function createAnime(initialState: any, formData: FormData){
    const data = {
        name: formData.get("name"),
        nota: formData.get("nota"),
        genero: formData.get("genero"),
        completo: formData.get("completo")
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    if(!response.ok){
        const errors = await response.json()

        return {
            values: {
                name: formData.get("name"),
                nota: formData.get("nota"),
                genero: formData.get("genero"),
                completo: formData.get("completo")
            },
            errors:{
                name: errors.find( (error:any) => error.field === "name")?.message,
                nota: errors.find( (error:any) => error.field === "nota")?.message,
                genero: errors.find( (error:any) => error.field === "genero")?.message,
                completo: errors.find( (error:any) => error.field === "completo")?.message
            }
        }
    }
}