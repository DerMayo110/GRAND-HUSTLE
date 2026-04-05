//useContext
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemedBox = () => {
    const theme = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#333",
        padding: "20px",
        borderRadius: "8px",
    };

    return (
        <div style={style}>
            Aktuelles Theme: {theme}
        </div>
    );
};

export default ThemedBox;
