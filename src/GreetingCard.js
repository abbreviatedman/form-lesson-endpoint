function GreetingCard(props) {
    const submittedData = props.submittedData;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Greeting Card</h5>
                <h6 className="card-subtitle mb-2 text-muted">{submittedData.occasion}</h6>
                <p className="card-text">{submittedData.message}</p>
                <footer className="blockquote-footer">
                    From: {submittedData.senderName}
                    {submittedData.includesPersonalNote && <small className="d-block mt-2">Personal Note: have a wonderful day!</small>}
                </footer>
            </div>
        </div>
    )
}

export default GreetingCard;