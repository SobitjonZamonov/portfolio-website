import React from "react";
import ASCIIText from "./component.jsx";

const Notfound = () => {
    return (
        <div className="w-full h-auto bg-black">
                <ASCIIText
                    text='404'
                    enableWaves={true}
                    asciiFontSize={3}
                />
        </div>
    )
}

export default Notfound;