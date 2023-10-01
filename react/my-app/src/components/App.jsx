import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function createNote(singleNote){
//     return(
//         <Note 
//             key={singleNote.id}
//             title={singleNote.title}
//             content={singleNote.content}
//         />
//     );
// }

function App(){
    return(
        <div>
            <Header />
            {/* {notes.map(createNote)}; */}
            {/* using arrow function */}
            {notes.map( singleNote => 
                (
                    <Note 
                        key={singleNote.id}
                        title={singleNote.title}
                        content={singleNote.content}
                    />
                )
                
            )};
            <Footer />
        </div>
    );
}

export default App;