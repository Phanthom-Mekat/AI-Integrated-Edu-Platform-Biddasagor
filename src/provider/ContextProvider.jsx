import { Context } from "./context";
import PropTypes from "prop-types";
const ContextProvider = ({children}) => {
    const info ={
        name:"Biddasagor",
    }
    return (
        <div>
            <Context.Provider value={info}> {children} </Context.Provider>
        </div>
    );
};
ContextProvider.propTypes = {
    children: PropTypes.node,
};

export default ContextProvider;