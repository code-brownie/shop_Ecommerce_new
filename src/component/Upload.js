import React, { useEffect, useState } from 'react';
function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);
    const [image, setimage] = useState([]);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const loadData = async () => {
        let response = await fetch('http://localhost:5000/api/auth/productItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setimage(response[0]);
    }
    useEffect(() => {
        loadData();
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("The image is sent");
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://localhost:8000/process_image', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            // console.log(data);
            setResult(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                    {
                       image.map((data)=>{
                        return(
                            result.map((e) => {
                                return (
                                    <>
                                        <div>
                                            {e.name}
                                        </div>
                                        <div> {(e.confidence > 0.5 && data.name ) ? ((<div>success</div>)) : "unsuccessfull"}
                                        </div>
                                    </>
                                )
                            })
                        )
                       })
                    }
                </div>
            )}
        </div>
    );
}

export default App;
