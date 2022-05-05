import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://akns-images.eonline.com/eol_images/Entire_Site/202188/rs_600x600-210908091732-08.09.21_600x600_MariliaMendonca_Instagrammariliamendoncacantora.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" />

                    <p> Marilia Mendonça</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://static1.purepeople.com.br/articles/1/32/87/61/@/3715845-marilia-mendonca-danca-de-short-curto-e-624x600-2.jpg"/>
               
            </div>


            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>10.638 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span> Marilia Mendonça</span> 
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 2 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )
}