export default function SingleProfilePage({ params }: any) {
    return (
        <div>
            <h1 className="text-center text-4xl">Profile for ID: {params.id}</h1>
        </div>
    )
}