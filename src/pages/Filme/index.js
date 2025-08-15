import { useEffect, useState } from "react";
import{ useParams, useNavigate } from "react-router-dom";
import "./filme.info.css";
import api from "../../services/api";
import { toast } from "react-toastify";

function Filme() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    async function loadFilme() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: '7fa6edd1261effec2ddd04f3e25adff8',
          language: 'pt-BR'
        }
      })

      .then((response) => {
        setFilme(response.data);
        console.log(response.data);
        setLoading(false);
        
      })
      .catch(() => {

        console.log("FILME NAO ENCONTRADO");
        navigate("/", { replace: true });
        return;
      
      })
    }

    loadFilme();

    return () => {
      console.log("COMPONENTE DESMONTADO");
    }
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn("Você já possui esse filme salvo!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
    
  }

    if (loading) {
    return (
      <div className="fime-info">
        <h2>Carregando Detalhes do Filme...</h2>
      </div>
    );
  }


  return (
    <div className="filme-info" >
     <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
     
     <h3>Sinopse</h3>
     <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      
      <div className="area-buttons">
        <button onClick={salvarFilme}> Salvar </button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}   

export default Filme;