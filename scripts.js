const projects = {
    tarefaAPI: {
      image: 'img/tarefaAPI.png',
      title: 'Tarefa API/Java',
      description: 'Projeto de gerenciamento de tarefas, desenvolvido como uma versão básica de uma API REST com operações CRUD. Utilizei Java, Spring Boot, JPA e PostgreSQL para estruturar o backend.',
     // link: 'https://github.com/Danielsalesds'
    },
    mobileApp: {
      image: 'img/club-app.jpeg',
      title: 'Club App/Flutter',
      description: 'Aplicativo mobile completo para agendamento de horários em um clube de quadras esportivas. Desenvolvido utilizando Flutter para a interface e Firebase como backend. Atuei como desenvolvedor full stack, com foco principal no front-end e na experiência do usuário. ',
      //link: 'https://github.com/Danielsalesds/Sistema-de-Reservas-de-Quadra-Esportivas'
    },
    produtosAPI: {
      image: 'img/produtosAPI.png',
      title: 'Produtos API/Java',
      description: 'Uma aplicação simples com SpringBoot|java|JPA, API de Produtos Cadastro, Bucar, Deletar, Atualizar com banco H2(em memoria).',
      link: 'https://github.com/Danielsalesds/Produtos_API'
    },
    sigecPHP: {
      image: 'img/produtosAPI.png',
      title: 'Sigec/PHP',
      description: 'Sistema simples para gerenciamento de associados e controle de anuidades, desenvolvido em PHP como forma de praticar e aprofundar meus conhecimentos na criação de sistemas de gerenciamento web.',
      link: 'https://github.com/Danielsalesds/Sistema-de-gerenciamento'
    },
    // Adicione mais projetos conforme o ID usado no onclick
  };

  function openModal(id) {
    const modal = document.getElementById('modal');
    const linkBtn = document.getElementById('modal-link');

    document.getElementById('modal-image').src = projects[id].image;
    document.getElementById('modal-title').textContent = projects[id].title;
    document.getElementById('modal-description').textContent = projects[id].description;
    

    if (projects[id].link) {
        linkBtn.href = projects[id].link;
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.href = 'https://github.com/Danielsalesds';
        //linkBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }


var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "✅ Obrigado! Sua mensagem foi enviada com sucesso!";
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! Ocorreu um problema ao enviar sua mensagem.";
        }
      });
    }
  }).catch(error => {
    status.innerHTML = "Oops! Ocorreu um problema ao enviar sua mensagem.";
  });
}

form.addEventListener("submit", handleSubmit);
