export default function Cards() {
    return (
        <div className="card p-3" style={{ width: "200px" }}>

            <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                alt="Livro"
                className="card-img-top"
            />

            <div className="card-body">
                <p className="text-muted mb-1">Poesia</p>
                <h6 className="card-title">O Silêncio do Mar</h6>
                <p className="card-text">Helena Vasconcelos</p>
            </div>

        </div>
    );
}