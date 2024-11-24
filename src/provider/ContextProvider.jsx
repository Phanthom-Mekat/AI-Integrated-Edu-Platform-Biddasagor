import { Context } from "./context";

const ContextProvider = () => {
    const info ={
        name:"Biddasagor",
    }
    return (
        <div>
            <Context.Provider value={info}></Context.Provider>
    
        </div>
    );
};

export default ContextProvider;