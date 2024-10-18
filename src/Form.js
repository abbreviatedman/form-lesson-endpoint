import {useState} from 'react';

function Form (props) {
    const [formData, setFormData] = useState({
        recipientName: '',
        senderName: '',
        message: '',
        occasion: 'Birthday',
        includesPersonalNote: false,
    })

    function handleFormChange (event) {
        const {name, type, checked, value} = event.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    function handleSubmit (event) {
        event.preventDefault(); //< first, don't reload, okay?
        props.onSubmit(formData); // then, call our parent component's function
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Recipient's Name:</label>
                <input type="text" name="recipientName" onChange={handleFormChange} />
            </div>
            <div>
                <label>Sender's Name:</label>
                <input type="text" name="senderName" onChange={handleFormChange} />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" onChange={handleFormChange}></textarea>
            </div>
            <div>
                <label>Occasion:</label>
                <select name="occasion" onChange={handleFormChange}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Holiday">Holiday</option>
                </select>
            </div>
            <div>
                <label>Include Personal Note:</label>
                <input
                    type="checkbox"
                    name="includesPersonalNote"
                    onChange={handleFormChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form