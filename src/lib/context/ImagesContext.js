import { createContext, useContext } from "react"

const ImagesContext = createContext({})

export function useImagesContext() {
    return useContext(ImagesContext)
}

export default ImagesContext