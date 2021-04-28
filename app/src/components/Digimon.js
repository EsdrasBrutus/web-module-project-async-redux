import Card from './Card'
const Digimon = (props) =>{

    return (
        <div>
            <Card>
                <h3>{props.digimon.name}</h3>
                <img src ={props.digimon.img} alt={props.digimon.name} />
                {props.digimon.level}
            </Card>
        </div>
    )
}

export default Digimon