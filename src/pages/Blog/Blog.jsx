import Header from "../../components/Header";
import Post from "./Post";
import styled from "styled-components"
import Blog_noticia1 from '../../assets/Blog_noticia1.png'
import Blog_noticia2 from '../../assets/Blog_noticia2.png'
import Blog_noticia3 from '../../assets/Blog_noticia3.png'
import Blog_noticia4 from '../../assets/Blog_noticia4.png'
import Blog_noticia5 from '../../assets/Blog_noticia5.png'
import Blog_banner from '../../assets/Blog_banner.png'


const dados = [
    {
    imageSource: Blog_noticia1,
    titulo: "Carreira",
    corpo: "Boas práticas para devs em início de carreira",
    horario: "Há um ano • 4 min de leitura"
},
{
    imageSource: Blog_noticia2,
    titulo: "Carreira",
    corpo: "Next Level Week: os caminhos que trilhamos até aqui",
    horario: "Há um ano • 6 min de leitura"
},
{
    imageSource: Blog_noticia3,
    titulo: "Clean-code",
    corpo: "Codigo Limpo: reflexão e prática",
    horario: "Há um ano • 3 min de leitura"
},
{
    imageSource: Blog_noticia4,
    titulo: "Prisma",
    corpo: "Prisma: uma das melhores coisas que já aconteceu no ecossistema",
    horario: "Há um ano • 3 min de leitura"
},
{
    imageSource: Blog_noticia5,
    titulo: "Comunidade",
    corpo: "Comunidade: Guia prático de como contribuir para o ecossistema de tecnologia",
    horario: "Há um ano • 4 min de leitura"
}
]

export default function Blog() {
    
    const noticias = dados.map(n => (
        <Post dados={n} key={dados.imageSource}></Post>
    ))
    
    console.log(noticias)
    return (
    <>
        <Header underline="blog"></Header>
        <StyledBlog>
        <StyledNewsLetter>
            <img src={Blog_banner} alt="Blog_banner"/>
            <div>
                <h1>Blog da Rocketseat</h1>
                <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos. Transforme sua carreira em uma jornada de evolução contínua através das melhores tecnologias.</p>
                <button>Inscreva-se em nossa newsletter</button>
            </div>
        </StyledNewsLetter>
        <StyledNoticias>
            {noticias}
        </StyledNoticias>
        </StyledBlog>

    </>
    )
}


const StyledBlog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
`

const StyledNewsLetter = styled.div`
    display: flex;
    justify-content: center;
    img {
        position: relative;
        width: 100vw;
    }
    div {
        height: 500px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        color: white;
        h1 {
            font-size: 30px;
        }
        button {
            width: 20%;
        }
    }
`

const StyledNoticias = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`