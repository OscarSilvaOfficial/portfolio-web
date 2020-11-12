import React from 'react'

class Main extends React.Component {
    render() {
        return(
            <main id="main">

                <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                    <h2>Sobre</h2>
                    </div>

                    <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/img/profile-img.jpg" className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>FullStack Developer.</h3>
                        <div className="row">
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Nascimento:</strong> 29 Dezembro 2000</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Celular:</strong> (47) 9 8874-3841</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Cidade:</strong> Curitiba, PR</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Idade:</strong> 19</li>
                            <li><i className="icofont-rounded-right"></i> <strong>E-mail:</strong> oscarkaka222@gmail.com</li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        Sou programador FullStack, e agradeço a Deus todos os dias por saber 
                        a minha profissão desde cedo, e ainda mais, por me dar a oportunidade de trabalhar
                        no que amo e nunca perder a vontade de estudar, a cada dia aprendo algo e sempre
                        quero mais e mais. 
                        </p>
                    </div>
                    </div>

                </div>
                </section>
            
                <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Skills</h2>
                    <p>Ao longo dos meus estudos, eu agreguei essas técnologias em meus conhecimentos.</p>
                    </div>

                    <div className="row skills-content">

                    <div className="col-lg-6" data-aos="fade-up">

                        <div className="progress">
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">JavaScript <i className="val">75%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">VueJS <i className="val">55%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div className="progress">
                        <span className="skill">Python <i className="val">95%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">React <i className="val">70%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">Django <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">Flask <i className="val">85%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                </section>

                <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                    <h2>Carreira</h2>
                    </div>

                    <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        
                        <h3 className="resume-title">Faculdade</h3>
                        <div className="resume-item">
                            <h4>Análise &amp; Desenvolvimento de Software</h4>
                            <h5>2017 - 2020</h5>
                            <p><em>Uninter, EAD</em></p>
                        </div>

                        <div className="resume-item">
                            <h4>Cursos Realizados</h4>
                            <h5>2016 - 2020</h5>
                            <p><i className="icofont-rounded-right"></i><em>MySQL - Udemy</em></p>
                            <p><i className="icofont-rounded-right"></i><em>Flask - Alura</em></p>
                            <p><i className="icofont-rounded-right"></i><em>HTML - Fundação Bradesco</em></p>
                            <p><i className="icofont-rounded-right"></i><em>HTML5 | CSS3 - Alura</em></p>
                            <p><i className="icofont-rounded-right"></i><em>JavaScript Orientado a Objeto - Alura</em></p>
                            <p><i className="icofont-rounded-right"></i><em>JavaScript - Udemy</em></p>
                            <p><i className="icofont-rounded-right"></i><em>Python - Udemy</em></p>
                            <p><i className="icofont-rounded-right"></i><em>React - Alura</em></p>
                            <p><i className="icofont-rounded-right"></i><em>Segurança da Informação - Fundação Bradesco</em></p>
                            <p><i className="icofont-rounded-right"></i><em>Redes - Fundação Bradesco</em></p>
                            <p><i className="icofont-rounded-right"></i>Sistemas Opecionais - Fundação Bradesco<em></em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Experiência - Profissional</h3>
                        <div className="resume-item">
                            <h4>Desenvolvedor FullStack - Júnior</h4>
                            <h5>QuiteJá | 2020 - Atual</h5>
                            <p><em>Curitiba, PR</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Desenvolvedor FullStack - Júnior</h4>
                            <h5>RHBrasil | 2020</h5>
                            <p><em>Joinville, SC</em></p>
                        
                        <ul>
                            <li>Desenvolvimento de telas de alguns sistemas existentes</li>
                            <li>Criação do Backend utilizando PHP7</li>
                        </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Desenvolvedor FullStack - Autônomo </h4>
                            <h5>Remoto-Club | 2020</h5>
                            <p><em>Itapoá, SC</em></p>
                        
                        <ul>
                            <li>Desenvolvimento do front-end autilizando VueJS e NuxtJS</li>
                            <li>Back-end em Java, utilizando Maven, SpringBoot e Hibernate</li>
                        </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Menor Aprendiz -> Estagiário -> Assistente de TI</h4>
                            <h5>Clif - Centro Logístico | 2020</h5>
                            <p><em>Itapoá, SC</em></p>
                        
                        <ul>
                            <li>
                                Meu primeiro emprego, onde a melhor experiência
                                 como menor aprendiz que tive foi aprender a trabalhar
                                  e conviver em um ambiênte coorporativo
                            </li>
                            <li>
                                Como estagiário de TI eu participava da equipe de infra mesmo cursando Desenvolvimento de Sistemas,
                                ainda sim começei a desenvolver sozinho uma intranet para empresa sem nenhum custo, mas por amar 
                                o que eu estudo. 
                            </li>
                            <li>
                                Como assistente de TI tive meu maior teste profissional, pois envolveu
                                muito estresse psicológico e capacidade de resolução de problemas.
                                Nessa etapa da minha carreira eu terminei de desenvolder a intranet da empresa,
                                fiz a gerência e mônitoramento de rede, e por ultimo fazia o helpdesk da empresa.
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                    </div>

                </div>
                </section>

                <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Portfolio</h2>
                    </div>

                    <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        </ul>
                    </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img1.PNG" className="img-fluid" alt=""></img>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img2.PNG" className="img-fluid" alt=""></img>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img3.PNG" className="img-fluid" alt=""></img>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img4.PNG" className="img-fluid" alt=""></img>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img5.PNG" className="img-fluid" alt=""></img>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="/img/portfolio/img6.PNG" className="img-fluid" alt=""></img>
                       
                        </div>
                    </div>

                    </div>

                </div>
                </section>

            

                <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                    <h2>Contato</h2>
                    </div>

                    <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                            <i className="icofont-google-map"></i>
                            <h4>Localização:</h4>
                            <p>Curitiba, PR</p>
                        </div>

                        <div className="email">
                            <i className="icofont-envelope"></i>
                            <h4>Email:</h4>
                            <p>oscarkaka222@gmail.com</p>
                        </div>

                        <div className="phone">
                            <i className="icofont-phone"></i>
                            <h4>Ligue:</h4>
                            <p>(47) 9 8874-3841</p>
                        </div>

                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form method="post" className="php-email-form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="name">Nome</label>
                            <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="name">E-mail</label>
                            <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Título</label>
                            <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group">
                            <label for="name">Mensagem</label>
                            <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Mensagem Enviada!</div>
                        </div>
                        <div className="text-center"><button type="submit">Enviar</button></div>
                        </form>
                    </div>

                    </div>

                </div>
                </section>

            </main>
        )
    }
}

export default Main