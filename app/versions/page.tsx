export default async function Page(){
    const dynamicData = await fetch(`https://...`, { cache: 'no-store' })
    return(
        <>
            <h1>test</h1>
        </>
    )
}