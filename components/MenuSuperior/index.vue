<script>

// {
//   "codigo": 1,                         AUTO-GERADO
//   "nome": "Peter",                     Inserido pelo usuário
//   "email": "peter65ffr@hotmail.com",   Inserido pelo usuário
//   "assunto": "Vendas",                 Inserido pelo usuário
//   "mensagem": "Comprar ..."            Inserido pelo usuário
// }

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';
// Exporta o componente Vue como um objeto JavaScript
export default {
  data () {
    return {
      infoContato: [], // Array vazio para armazenar informações recuperadas do servidor

       // Objeto para armazenar os dados do contato
      contato: {
         // Propriedade para armazenar o nome do contato
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      },

      infoAcessoClientes: [], 
      acessoCliente: {
        // Propriedades para armazenar os dados da outra modalidade
        nome: '',
        senha: ''
      },
          
    }
  },

  // methods (Métodos) = Função
  methods: {
    clearData() {
      // Limpa os dados após a requisição.
      this.contato = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      };
      this.acessoCliente = {
        nome: '',
        senha: '',
      };
    },
    fetchInfoContato (callback) {
      axios.get('https://localhost:7266/api/v1/SITE_Contato'
      ).then((res) => {
        this.infoContato = res.data;
        if (callback) callback();
      }).catch((error) => {
        console.log(error)
      });
    },
    // Método "insert" para enviar dados para o servidor
    insertContato () {
      // Envia uma requisição POST para a URL especificada
      axios.post('https://localhost:7266/api/v1/SITE_Contato',
        // Body => Corpo da requisição (JSON)
        {
          // A chave "cNmContato" corresponde ao nome do contato e recebe o valor do nome armazenado em "this.contato.nome"
          nome: this.contato.nome,
          email: this.contato.email,
          assunto: this.contato.assunto,
          mensagem: this.contato.mensagem
        }
      ).then((res) => {
        // Este trecho de código é executado quando a requisição POST é bem-sucedida
        // Caminho de sucesso:
        toast.success("Enviado com sucesso !", {
          autoClose: 10000,
        });
        // console.log('Contato inserido com sucesso:', res.data);
      }).catch((error) => {
        // Caminho de falha:
        toast.error("Error", {
          autoClose: 1000,
        });

        console.error('Erro ao inserir contato:', error);
      });
      
      this.clearData();     
    },

    fetchInfoAcessoClientes (callback) {
      axios.get('https://localhost:7266/api/v1/SITE_AcessoClientes'
      ).then((res) => {
        this.infoAcessoClientes = res.data;
        if (callback) callback();
      }).catch((error) => {
        console.log(error);
      });
    },

    insertAcessoCliente () {
      axios.post('https://localhost:7266/api/v1/SITE_AcessoClientes',

      {
          Nome: this.acessoCliente.nome,
          Senha: this.acessoCliente.senha
      }     

      ).then((res) => {

        // console.log('Contato inserido com sucesso:', res.data);
      }).catch((error) => {
        
        console.error('Erro ao inserir contato:', error);
      });
      this.clearData();
    },

    verificarLogin () {
      // Recuperar JSON da tabela acesso clientes. (OK)
      // Iterar (repetir/percorrer) sobre o array this.infoAcessoClientes:
      // Se: achar pelo menos uma combinação válida (Nome e Senha corretos) -> Retorna com o Toast.success.
      // Se: Não achar nenhuma combinação válida -> Retorna com o toast.error.

      let encontrouCombinacaoValida = false;

        // Iterar (repetir) sobre todos os objetos do Arrasy do JSON. (OK)
        for (let i = 0; i < this.infoAcessoClientes.length; i++) {
        // Verificar um a um se a chave deles bate com os dados inseridos pelo usuário
        if (String(this.acessoCliente.nome) === String(this.infoAcessoClientes[i].nome) && 
            String(this.acessoCliente.senha) === String(this.infoAcessoClientes[i].senha)) {
            // Se os dados inseridos forem corretos, exibir um alerta confirmando o login
            toast.success("Login realizado com sucesso!", {
                autoClose: 10000,
            });
            // Se o login foi bem-sucedido, podemos sair do loop usando 'return'
            return;
          }
        }
          // Se o loop terminar sem encontrar uma correspondência, exibir um alerta de erro
        toast.error("Usuário ou Senha Incorretos!", {
        autoClose: 10000,
        });
        
    },
  },

  // Esta é uma função do ciclo de vida do Vue.js chamada "mounted".
  // Ela é executada após o componente ser montado no DOM.
  // Geralmente, é usada para realizar inicializações que dependem da presença do DOM.
  // Por exemplo, aqui você pode realizar operações como buscar dados iniciais do servidor,
  // configurar event listeners ou qualquer outra inicialização que precise ser feita após o componente estar pronto.
  mounted () {
    // A busca no banco é assincrona:
    this.fetchInfoAcessoClientes(() => {
    });

  }
}
</script>

<template>
  
 <main>

    <!-- Modal Acesso Cliente -->
    <div class="modal fade" id="acessoClienteModal" tabindex="-1" aria-labelledby="acessoClienteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <!-- Estrutura -->
        <div class="modal-content">

          <!-- Cabeçalho -->
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="acessoClienteModalLabel">Olá! Consulte seus pedidos:</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="clearData" aria-label="Close"></button>
          </div>

          <!-- Corpo -->
          <div class="modal-body">
            <!-- Formulário -->
            <form>
              <!-- Nome -->
              <div class="form-floating mb-3"> <!-- Esta div envolve todo o campo de entrada, fornecendo estilos de layout e espaçamento. -->

                <input
                  type="text"
                  class="form-control"
                  id="floating-ac-nome-Input"
                  placeholder="Nome" 
                  v-model="acessoCliente.nome"
                  required
                  
                >
                <!-- Este é o campo de entrada de texto propriamente dito. -->
  <!-- "type": Define o tipo de entrada, neste caso, é texto. -->
  <!-- "class": Define as classes de estilo para o campo de entrada. No Bootstrap, "form-control" é uma classe que estiliza o campo de entrada. -->
  <!-- "id": Define um identificador único para o campo de entrada, usado para associar o rótulo ao campo. -->
  <!-- "placeholder": Define um texto de exemplo que aparece dentro do campo de entrada quando ele está vazio. -->
  <!-- "required": Define que este campo é obrigatório. Isso significa que o usuário deve preenchê-lo antes de enviar o formulário. -->
                <label for="floating-ac-nome-Input">Nome</label>
                 <!-- Este é o rótulo associado ao campo de entrada. -->
  <!-- O atributo "for" deste rótulo corresponde ao "id" do campo de entrada, permitindo que o usuário clique no rótulo para focar no campo de entrada. -->
              </div>

              <!-- E-mail -->
              <div class="form-floating mb-3">
                <!-- Esta div envolve todo o campo de entrada de senha, fornecendo estilos de layout e espaçamento. -->
                <input
                  type="password"
                  class="form-control"
                  id="floating-ac-senha-Input"
                  placeholder="*********"
                  v-model="acessoCliente.senha"
                  required
                >
              <!-- Este é o campo de entrada de senha propriamente dito. -->
  <!-- "type": Define o tipo de entrada, neste caso, é uma senha. Isso faz com que os caracteres digitados sejam ocultos. -->
  <!-- "class": Define as classes de estilo para o campo de entrada. No Bootstrap, "form-control" é uma classe que estiliza o campo de entrada. -->
  <!-- "id": Define um identificador único para o campo de entrada, usado para associar o rótulo ao campo. -->
  <!-- "placeholder": Define um texto de exemplo que aparece dentro do campo de entrada quando ele está vazio. -->
  <!-- "required": Define que este campo é obrigatório. Isso significa que o usuário deve preenchê-lo antes de enviar o formulário. -->
                <label for="floating-ac-senha-Input">Senha</label>
                 <!-- Este é o rótulo associado ao campo de entrada de senha. -->
  <!-- O atributo "for" deste rótulo corresponde ao "id" do campo de entrada, permitindo que o usuário clique no rótulo para focar no campo de entrada. -->
              </div>
            </form>

          </div>

          <!-- Rodapé -->
          <div class="modal-footer">
             <!-- Aqui estão os botões que aparecem no rodapé do modal. -->
            <button type="button"
             class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="clearData"
              >Fechar
            </button>
          <!-- Este botão fecha o modal quando clicado. -->
  <!-- "type": Define o tipo de botão. Neste caso, é do tipo "button", que não envia o formulário quando clicado. -->
  <!-- "class": Define as classes de estilo para o botão. "btn" é uma classe do Bootstrap para estilizar botões, enquanto "btn-secondary" define o estilo como secundário. -->
  <!-- "data-bs-dismiss": Define que este botão deve fechar o modal ao ser clicado. -->
  <!-- "modal": Especifica o componente modal que deve ser fechado. -->
            <button type="button"
             class="btn btn-success"
             @click="verificarLogin()"
             >Entrar
            </button>
            <!-- Este botão não possui uma função específica definida aqui. -->
  <!-- "type": Define o tipo de botão. Neste caso, é do tipo "button". -->
  <!-- "class": Define as classes de estilo para o botão. "btn" é uma classe do Bootstrap para estilizar botões, enquanto "btn-success" define o estilo como sucesso. -->
          </div>
        </div>

      </div>
    </div>

    <!-- Modal Contato -->
    <div class="modal fade" id="contatoModal" tabindex="-1" aria-labelledby="contatoModalLabel" aria-hidden="true">
      <!-- <div class="modal fade": Esta div define um modal que será estilizado como um modal pelo Bootstrap. A classe fade adiciona um efeito de transição suave ao modal quando ele é exibido ou ocultado. -->
      <div class="modal-dialog">
        <!-- <div class="modal-dialog">: Esta div define o contêiner para o diálogo/modal. O diálogo/modal é a parte visível do modal que contém o conteúdo, como cabeçalho, corpo e rodapé. Essa div determina o tamanho e o comportamento do modal, como sua posição na tela e sua responsividade. -->
        <!-- id="contatoModal": Este atributo id fornece uma identificação única para o modal, que pode ser usado para referenciá-lo em JavaScript ou CSS. -->
        <!-- Estrutura -->
        <div class="modal-content">
          <!--  -->

          <!-- Cabeçalho -->
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="contatoModalLabel">Entre em contato com a gente!</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="clearData" aria-label="Close"></button>
          </div>

          <!-- Corpo -->
          <div class="modal-body">
            <!-- FORMULÁRIO -->
            <form>
              <!-- Nome -->
              <div class="form-floating mb-3" id="exemplo">
                <input
                  type="text"
                  class="form-control"
                  id="floating-nome-Input"
                  placeholder="Nome"
                  v-model="contato.nome"
                  required
                >
                <label for="floating-nome-Input">Nome</label>
              </div>

              <!-- E-mail -->
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control" 
                  id="floating-email-Input" 
                  placeholder="emailexemplo@gmail.com"
                  v-model="contato.email"
                  required
                  >
                <label for="floating-email-Input">E-mail</label>
              </div>

              <!-- Assunto -->
              <div class="form-floating mb-3">
                <input type="text"
                 class="form-control"
                 id="floating-assunto-Input" 
                 placeholder="Terceirização" 
                 v-model="contato.assunto"
                 required
                 >
                <label for="floating-assunto-Input">Assunto</label>
              </div>

              <!-- Mensagem -->
              <div class="form-floating mb-3">
                <textarea class="form-control"
                  id="floating-mensagem-textarea"
                  placeholder="Olá, preciso entender como faço para melhorar o processo de logística da minha empresa!"
                  v-model="contato.mensagem"
                  required
                />
                <label for="floating-mensagem-textarea">Mensagem</label>
              </div>
            </form>

          </div>

          <!-- Rodapé -->
          <div class="modal-footer">
            <button
              type="button" 
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="clearData"
            >Fechar</button>

            <!-- <div class="modal-footer">: Esta div define a seção de rodapé do modal, onde os botões ou controles relacionados ao fechamento ou ações adicionais podem ser colocados. -->
            <!-- <button type="button" class="btn btn-secondary">: Este é um botão para fechar o modal. Ele possui as classes btn e btn-secondary, que são classes do Bootstrap para estilizar botões. O type="button" define este elemento como um botão, e btn-secondary define o estilo secundário para o botão. -->
            <!-- data-bs-dismiss="modal": Este atributo data-bs-dismiss é uma funcionalidade do Bootstrap que fecha o modal quando o botão é clicado. Ele é responsável por fechar o modal sem a necessidade de escrever JavaScript adicional. -->
            <!-- @click="clearData": Este é um evento de clique que chama o método clearData quando o botão é clicado. O método clearData é responsável por limpar os dados do formulário dentro do modal. -->
            <!-- Botão de ENVIAR -->
            <!-- data-bs-dismiss="modal": Este atributo data-bs-dismiss é uma funcionalidade do Bootstrap que fecha o modal quando o botão é clicado. Ele é responsável por fechar o modal após o envio do formulário. -->
            <button
              type="button"
              class="btn btn-success"
              @click="insertContato()"
              data-bs-dismiss="modal"
            >Enviar!</button>
          </div>
        </div>
        <!-- @click="insert()": Este é um evento de clique que chama o método insert quando o botão é clicado. O método insert é responsável por enviar os dados do formulário para o servidor. -->
        <!-- <button type="button" class="btn btn-success">: Este é um botão para enviar o formulário dentro do modal. Ele possui as classes btn e btn-success, que são classes do Bootstrap para estilizar botões. O type="button" define este elemento como um botão. -->
        <!-- >Enviar!</button>: Este é o texto dentro do botão, que indica ao usuário que clicando nele, os dados serão enviados. -->

        <!--POP-UP-->
        
      </div>
    </div>

    <!-- Menu Navegação -->
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: white; padding: 10px 5px 15px 5px; margin: 0px 0px 0px 0px">
      <div class="container-fluid">

        <!-- Menu Navegação Mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span>
        </button>
        <!-- Logo -->
        <NuxtLink to="/" style="width: 325px;">
          <img src="assets\images\logo-embalarte.jpg" alt="Logo Embalarte" class="imagem-logo">
        </NuxtLink>


        <!-- Menu Navegação WEB -->
        <div class="collapse navbar-collapse  menu-nav-web" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <!-- Quem Somos -->
            <li class="nav-item item-navegacao">
              <NuxtLink to="/quemSomos" class="link-nuxt">
                <button class="nav-link botao-navegacao">
                  <IconsPequenoQuemSomos class="icones"/>
                  Quem somos
                </button>
              </NuxtLink>
            </li>

            <!-- Acesso Clientes -->
            <li class="nav-item item-navegacao">
              <button class="nav-link botao-navegacao" data-bs-toggle="modal" data-bs-target="#acessoClienteModal">
                <IconsPequenoPrancheta class="icones"/>
                Acesso Clientes
              </button>
            </li>

            <!-- Contato -->
            <li class="nav-item item-navegacao">
              <button class="nav-link botao-navegacao" data-bs-toggle="modal" data-bs-target="#contatoModal">
                <IconsPequenoEmail class="icones" />
                Contato
              </button>
            </li>

          </ul>

          <!-- Redes Sociais -->
          <div class="social-media">
            <a href="https://www.instagram.com/grupoembalarte" target="_blank" title="Instagram">
              <IconsMedioInstagram />
            </a>
            <a href="https://www.linkedin.com/company/grupoembalarte/mycompany" target="_blank" title="LinkedIn">
              <IconsMedioLinkedIn />
            </a>
          </div>

        </div>

      </div>
    </nav>

  </main>
</template>

<style>
/* Diminuir Width e Height do logo Embalarte para celular */


.rb {
  border: 1px solid red;
}

.bb {
  border: 1px solid blue;
}

.yb {
  border: 1px solid darkgoldenrod;
}

.imagem-logo {
  width: 100%;
  height: 100%;
}

.menu-nav-web {
  margin: 0px;
  padding: 25px 15px 5px 15px;
  height: 100%;
}

.item-navegacao {
  margin: 0px 5px;
  padding: 15px 0px 0px 0px;
}

.botao-navegacao {
  padding: 0px 0px 0px 0px;
}

.link-nuxt {
  text-decoration: none;
}

.icones {
  margin: 0px 0px 4px 0px;
}

.social-media {
  display: flex;
  justify-content: space-between;
  margin: 0px;
  width: 100px;
}

@media only screen and (max-width: 768px) {

  .imagem-logo {
    width: 80%;
    height: 80%;
    float: right;
  }
}

</style>