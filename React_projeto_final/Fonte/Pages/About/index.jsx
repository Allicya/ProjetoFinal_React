import fotoPerfil from '\React_projeto_final\Fonte\Assets\Foto Allicya.jpeg'
import styles from './about.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
        Sobre mim!! 💜
        </h1>
        <div>
            <img src={fotoPerfil} alt="\React_projeto_final\Fonte\Assets\foto-perfil.png" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Allícya Oliveira Augusto da Rocha</h1>
          <h2 className={styles.profissao}>Estudante de Turismo na Unirio futura desenvolvedora Front-End</h2>
          <p className={styles.sobreMim}>
          Aos 22 anos, mergulhei de cabeça em uma jornada de autodescoberta e reinvenção profissional. 
Meu nome é Allicya, e estou determinada a trilhar um novo caminho na área de Tecnologia da 
Informação (TI). Essa decisão não veio do nada; foi o resultado de encontros inspiradores
e experiências transformadoras ao longo do meu percurso.

Encontrei pessoas incríveis no meio do caminho, mulheres que, com sua paixão e expertise 
em TI, me ofereceram um universo de possibilidades que eu nunca havia pensado antes. Suas 
histórias de sucesso e sua dedicação ao trabalho não só me impressionaram, mas também me 
contribuíram para reavaliar minhas próprias ambições e habilidades.

Foi então que me parei com o Ciclo Formativo Básico da Pretalab, um programa educacional 
concebido para capacitar mulheres negras na área de tecnologia. Para mim, representou não 
apenas uma oportunidade de adquirir novos conhecimentos, mas também um marco simbólico, o 
primeiro passo em direção a uma carreira promissora e significativa.

Durante o Ciclo Formativo, mergulhei de cabeça em estudos sobre Front-end, explorando conceitos 
que antes me deixavam distantes e complexos. A cada aula, a cada desafio enfrentado, senti-me 
mais confiante e motivado a seguir em frente. Não se tratava apenas de aprender a programar; 
era sobre empoderamento, representatividade e quebra de barreiras.
          </p>
      </div>
    </>
  )
}

export default Sobre;