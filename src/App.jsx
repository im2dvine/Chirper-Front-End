// import React from 'react';

// const App = () => {
//     return (
//         <div>
//             <h1>Hola Earthlings!</h1>
//         </div>
//     );
// };

// export default App;


/***First Attempt***/

// import React, { useState } from 'react';

// const App = () => {
//     const [username, setUsername] = useState();
//     const [chirps, setChirps] = useState();
//     const [chirpArr, setChirpArr] = useState([
//         {
//             username: "Harley Quinn",
//             message: "Mr! J! *heart eyes*",
//         },
//         {
//             username: "Joker",
//             message: "Why so serious?",
//         },
//         {
//             username: "Bruce Wayne",
//             message: "I AM BATMAN!!",
//         },
//     ]);



//     const submitChirp = () => {
//         let newChirp = {
//             username: username,
//             message: chirps,
//         };

//         setChirpArr([...chirps, newChirp]);
//         // emptyInputs();
//     };

//     // let emptyInputs = () => {
//     //     setnewName("");
//     //     setnewText("");
//     // };

//     // let myChirps = () => {
//     //     return chirps.map((chirps)
//     //     )};

//     chirps.map((chirp) => {
//         return (
//             <>
//                 <h3>@{chirp.username}</h3>
//                 <br></br><p>{chirp.message}</p>
//             </>
//         )

//         // return (
//         //     <>
//         //     <div className="bg-light card border-0">
//         //         <div className="card-body">
//         //           <h5 className="card-title">{chirp.username}</h5>
//         //           <p className="card-text">{chirp.message}</p>
//         //           <hr></hr>
//         //         </div>
//         //       </div>
//         //     </>
//         // )




//         return (
//             <>
//                 <input type="text" placeholder="username" onChange={(e) => setnewName(e.target.value)} ></input>

//                 <input type="text" placeholder="What To Chirp?" onChange={(e) => setnewText(e.target.value)} ></input>
//                 <button onClick={submitChirp}> Chirp It! </button>

//             </>
//         );
//     });
// };



// export default App;

/***Second Attempt***/


import React, { useState } from 'react';

const App = () => {
    const [username, setUsername] = useState();
    const [chirps, setChirps] = useState();
    const [chirpArr, setChirpArr] = useState([
        {
            username: "Harley Quinn",
            message: "Mr! J! *heart eyes*",
        },
        {
            username: "Joker",
            message: "Why so serious?",
        },
        {
            username: "Bruce Wayne",
            message: "I AM BATMAN!!",
        },
    ]);



    const submitChirp = () => {
        let newChirp = {
            username: username,
            message: chirps,
        };

        setChirpArr([...chirpArr, newChirp]);
    };


    return (
        <>
            <div id="main-container">

                <div id="chirp-container">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"></input>

                    <input onChange={(e) => setChirps(e.target.value)} type="text" placeholder="What To Chirp?"></input>
                    <button onClick={submitChirp}> Chirp It! </button>
                </div>

                <div className="chirps">
                    {chirpArr.map((chirp) => {
                        return (
                            <div>
                                <h3>@{chirp.username}</h3>
                                <br></br><p>{chirp.message}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
};




export default App;