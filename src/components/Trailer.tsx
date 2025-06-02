interface TrailerProps {
    trailerUrl: string;
    title: string;
}

export default function Trailer({ trailerUrl, title }: TrailerProps) {
    if (!trailerUrl) return null;

    const embedUrl = trailerUrl.replace("watch?v=", "embed/");

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Трейлер</h2>
            <div className="w-full h-64 md:h-96 rounded overflow-hidden shadow-lg">
                <iframe
                    src={embedUrl}
                    title={`Трейлер ${title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
