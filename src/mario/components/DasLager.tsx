type LagerProps ={
    items: Array<{id: number; name: string; quantity: number}>
}
const DasLager = (props: LagerProps) => {
    return (
        <ul>
            {props.items.map(Objekt => (
                <li key={Objekt.id}>name:{Objekt.name} Anzahl:{Objekt.quantity}</li>
            ))}
        </ul>
    )
}
export default DasLager;