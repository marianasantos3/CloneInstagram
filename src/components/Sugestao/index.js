import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {


    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/12/01/virginia-20236285.jpg`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>virginia</span>
                        <p>virginia Fonseca</p>
                    </div>

                    <button className="switch" >Seguir</button>

                </div>
            </div>

            <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://emc.acidadeon.com/dbimagens/dj_alok_1200x675_24012022165648.jpg`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Alok </span>
                        <p> alok </p>
                    </div>

                    <button className="switch" >Seguir</button>

                </div>
            </div>
                
            <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://i.scdn.co/image/ab6761610000e5eb08922485b69454372c9275c8`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span> Gustavo Lima</span>
                        <p>gustavo lima</p>
                    </div>

                    <button className="switch" >Seguir</button>

                </div>
            </div>

            <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`data:image/jpeg;base64,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`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Justin Bieber</span>
                        <p>justin bieber</p>
                    </div>

                    <button className="switch" >Seguir</button>

                </div>
            </div>
                

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
        </div>
        </div>
        </div>
    )
}