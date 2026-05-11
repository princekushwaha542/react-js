import { createContext } from "react"
export const PostContextData = createContext() 
const ThmeContext = (props) => {
  return (
    <div>
      <PostContextData.Provider value={"prince"}>
        {props.children}
      </PostContextData.Provider>
    </div>
  )
}

export default ThmeContext
