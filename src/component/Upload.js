import React, { useState } from 'react';
import '../style/upload.css';

function Upload(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    console.log(props.name.toLowerCase())
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
            setResult(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getProductStatus = (productName) => {
        const foundProduct = (props.name.toLowerCase() === productName);
        console.log(foundProduct)

        if (foundProduct) {
            return "Success";
        }
        return "Unsuccessful";
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input-button" type="file" accept="image/*" onChange={handleFileChange} />
                <button className="cart-button" type="submit">Submit</button>
            </form>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                    {result.map((data) => (
                        <div key={data.name}>
                            <div>{data.name}</div>
                            {getProductStatus(data.name)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Upload;
