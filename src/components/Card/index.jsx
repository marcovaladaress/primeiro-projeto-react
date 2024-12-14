
import styles from "./styles.module.css"


export default function Card(props){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt="Star wars poster" />
            <div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quia iure repellendus asperiores enim doloremque nostrum sapiente praesentium nesciunt
                . Omnis harum in et rerum nesciunt sequi ipsam tenetur, eos quod!</p>
                <button>Comprar Agora</button>
            </div>
        </div>
        
    )
}